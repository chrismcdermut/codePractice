// function solve(aVar, bVar, cVar) {
//   let a = parseInt(aVar, 10);
//   let b = parseInt(bVar, 10);
//   let c = parseInt(cVar, 10);
//   if (Number.isNaN(a)) { a = 1; }
//   if (Number.isNaN(b)) { b = 0; }
//   if (Number.isNaN(c)) { c = 0; }
//   const D = b * b - 4 * a * c;
//   console.log('logging D');
//   console.log(D);
//   return D;
// }

function solve(aVar, bVar, cVar) {
  // let a = parseInt(aVar, 10);
  // let b = parseInt(bVar, 10);
  // let c = parseInt(cVar, 10);
  // if (Number.isNaN(a)) { a = 1; }
  // if (Number.isNaN(b)) { b = 0; }
  // if (Number.isNaN(c)) { c = 0; }
  // const D = b * b - 4 * a * c;
  // console.log('logging D');
  // console.log(D);
  const result1 = (((-1 * bVar) + Math.sqrt(bVar ** 2) - (4 * aVar * cVar)) / (2 * aVar));
  const result2 = (((-1 * bVar) - Math.sqrt(bVar ** 2) - (4 * aVar * cVar)) / (2 * aVar));
  return [result1, result2];
}


function twoEggProblem(numberOfFloors) {
  // n^2+n−2*numberOfFloors=0
  return solve(1, 1, 2 * numberOfFloors);
}

module.exports = twoEggProblem;
