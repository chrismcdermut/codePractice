function findCycleInLList(startNode) {
  let slowRunner = startNode;
  let fastRunner = startNode;

  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    if (slowRunner === fastRunner) {
      return true;
    }
  }
  return false;
}

module.exports = findCycleInLList;
