// returns boolean
function isWithinBlastRadius(explodingMine, secondMine) {
  // name is redudant
  const explodingMineX1 = explodingMine[0];
  const explodingMineY1 = explodingMine[1];
  const explodingMineRadius = explodingMine[2];

  const secondMineX2 = secondMine[0];
  const secondMineY2 = secondMine[1];

  const distanceBetweenPoints = Math.sqrt((explodingMineX1 - secondMineX2) ^ 2
  + (explodingMineY1 - secondMineY2) ^ 2);

  return explodingMineRadius > distanceBetweenPoints;
}

function findMineBlastRadius(minesList) {
  // greedy algo counter,
  // compared outputs to this mostMinesBlown counter,
  // if the blowup chain exceeds, replace the counter/mine
  const mostMinesBlown = 0;
  const mostDestructiveMine = [];

  const explodingMinesQueue = [];

  const firstMine = minesList.unshift();

  if (explodingMinesQueue.length === 0) {
    explodingMinesQueue.push(items);
  }

  while (explodingMinesQueue.length > 0) {
    const nextMine = minesList.unshift();
    // if the next mine is with the radius, add it to the queue
    const recentlyExplodedMine = explodingMinesQueue[explodingMinesQueue.length];
    // if(explodingMinesQueue[])
  }


  for (let i = 0; i < minesList.length; i++) {
    const firstMine = minesList[i];
    const blownMinesMap = { };
    for (let j = 1; j < minesList.length; j++) {
      const nextMine = minesList[j];
      if (isWithinBlastRadius(firstMine, nextMine)) {
        // second layer
      }
    }
  }
}

module.exports = { isWithinBlastRadius, findMineBlastRadius };
