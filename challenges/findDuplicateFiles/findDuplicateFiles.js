const fs = require('fs');
const crypto = require('crypto');

function sampleHashFile(path) {
  const file = fs.statSync(path);

  const sampleSize = 4000;
  const totalBytes = file.size;

  const hash = crypto.createHash('sha512');

  // If the file is too short to take 3 samples, hash the entire file
  if (totalBytes < sampleSize * 3) {
    hash.update(fs.readFileSync(path));
  } else {
    const numBytesBetweenSamples = (totalBytes - sampleSize * 3) / 2;

    const buffer = Buffer.alloc(sampleSize * 3);

    // Read first, middle, and last bytes
    for (let offsetMultiplier = 0; offsetMultiplier <= 2; offsetMultiplier++) {
      const fd = fs.openSync(path, 'r');

      const offset = offsetMultiplier * sampleSize;
      const position = offsetMultiplier * (sampleSize + numBytesBetweenSamples);

      fs.readSync(fd, buffer, offset, sampleSize, position);
    }

    hash.update(buffer);
  }

  return hash.digest();
}

function slowFindDuplicateFiles(startingDirectory) {
  const filesSeenAlready = {};
  const stack = [startingDirectory];

  const duplicates = [];

  while (stack.length) {
    const currentPath = stack.pop();
    const currentFile = fs.statSync(currentPath);

    // If it's a directory,
    // put the contents in our stack
    if (currentFile.isDirectory()) {
      fs.readdirSync(currentPath).forEach((path) => {
        stack.push(`${currentPath}/${path}`);
      });

      // If it's a file
    } else {
      // Get its contents
      const fileContents = fs.readFileSync(currentPath);

      // Get its last edited time
      const currentLastEditedTime = currentFile.mtime;

      // If we've seen it before
      if (Object.prototype.hasOwnProperty.call(filesSeenAlready, fileContents)) {
        const existingFile = filesSeenAlready[fileContents];

        if (currentLastEditedTime > existingFile.lastEditedTime) {
          // Current file is the dupe!
          duplicates.push([currentPath, existingFile.path]);
        } else {
          // Old file is the dupe!
          duplicates.push([existingFile.path, currentPath]);

          // But also update filesSeenAlready to have the new file's info
          filesSeenAlready[fileContents] = {
            lastEditedTime: currentLastEditedTime,
            path: currentPath,
          };
        }

        // If it's a new file, throw it in filesSeenAlready
        // and record its path and last edited time,
        // so we can tell later if it's a dupe
      } else {
        filesSeenAlready[fileContents] = {
          lastEditedTime: currentLastEditedTime,
          path: currentPath,
        };
      }
    }
  }

  return duplicates;
}

function optimizedFindDuplicateFiles(startingDirectory) {
  const filesSeenAlready = {};
  const stack = [startingDirectory];

  const duplicates = [];

  while (stack.length) {
    const currentPath = stack.pop();
    const currentFile = fs.statSync(currentPath);

    // If it's a directory,
    // put the contents in our stack
    if (currentFile.isDirectory()) {
      fs.readdirSync(currentPath).forEach((path) => {
        stack.push(`${currentPath}/${path}`);
      });

      // If it's a file
    } else {
      // // Get its contents
      // const fileContents = fs.readFileSync(currentPath);
      // Get its hash
      const fileHash = sampleHashFile(currentPath);

      // Get its last edited time
      const currentLastEditedTime = currentFile.mtime;

      // If we've seen it before
      if (Object.prototype.hasOwnProperty.call(filesSeenAlready, fileHash)) {
        const existingFile = filesSeenAlready[fileHash];

        if (currentLastEditedTime > existingFile.lastEditedTime) {
          // Current file is the dupe!
          duplicates.push([currentPath, existingFile.path]);
        } else {
          // Old file is the dupe!
          duplicates.push([existingFile.path, currentPath]);

          // But also update filesSeenAlready to have the new file's info
          filesSeenAlready[fileHash] = {
            lastEditedTime: currentLastEditedTime,
            path: currentPath,
          };
        }

        // If it's a new file, throw it in filesSeenAlready
        // and record its path and last edited time,
        // so we can tell later if it's a dupe
      } else {
        filesSeenAlready[fileHash] = {
          lastEditedTime: currentLastEditedTime,
          path: currentPath,
        };
      }
    }
  }

  return duplicates;
}

module.exports = { slowFindDuplicateFiles, optimizedFindDuplicateFiles };
