// function findXOverlap(x1, width1, x2, width2) {
//   const highestStartpoint = Math.max(x1, x2);
//   const lowestEndoint = Math.min(x1 + width1, x2 + width2);
//   const finalRectangleOverlap = { startPoint: null, width: null };
//   // check for no overlap
//   if (highestStartpoint >= lowestEndpoint) {
//     return finalRectangleOverlap;
//   }
//
//   const overlapWidth = lowestEndpoint - highestStartpoint;
//   finalRectangleOverlap.startPoint = highestStartpoint;
//   finalRectangleOverlap.width = overlapWidth;
//   return finalRectangleOverlap;
// }
//
// function findYOverlap(y1, height1, y2, height2) {
//   const highestStartpoint = Math.max(y1, y2);
//   const lowestEndPoint = Math.min(y1 + height1, x2 + height2);
//   const finalRectangleOverlap = { startPoint: null, height: null };
//   // check for no overlap
//   if (highestStartpoint >= lowestEndpoint) {
//     return finalRectangleOverlap;
//   }
//
//   const overlapWidth = lowestEndPoint - highestStartpoint;
//   finalRectangleOverlap.startPoint = highestStartpoint;
//   finalRectangleOverlap.width = overlapWidth;
//   return finalRectangleOverlap;
// }

function findRangeOverlap(point1, length1, point2, length2) {
  const highestStartpoint = Math.max(point1, point2);
  const lowestEndpoint = Math.min(point1 + length1, point2 + length2);
  const finalRectangleOverlap = { startPoint: null, height: null };
  // check for no overlap
  if (highestStartpoint >= lowestEndpoint) {
    return finalRectangleOverlap;
  }

  const overlapWidth = lowestEndpoint - highestStartpoint;
  finalRectangleOverlap.startPoint = highestStartpoint;
  finalRectangleOverlap.overlapLength = overlapWidth;
  return finalRectangleOverlap;
}

function findRectangleOverlap(rect1, rect2) {
  const finalRectangle = {
    leftX: null,
    bottomY: null,
    width: null,
    height: null,
  };
  const xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  const yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
    return finalRectangle;
  }

  finalRectangle.leftX = xOverlap.startPoint;
  finalRectangle.bottomY = yOverlap.startPoint;
  finalRectangle.width = xOverlap.overlapLength;
  finalRectangle.height = yOverlap.overlapLength;

  return finalRectangle;
}

module.exports = findRectangleOverlap;
