function objectDestructureAssignment(input) {
  const { name, address: { zip } } = input;

  return {
    name, zip,
  };
}

function arrayDestructureAssignment(input) {
  const [first, , third] = input;
  return {
    first, third,
  };
}

function arrayMethodsAdmin(input) {
  const users = input;

  const adminArray = users.filter((person) => person.isAdmin === true);
  return adminArray;
}

function arrayMethodsTotalAge(input) {
  const users = input;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalAges = users.map((person) => parseInt(person.age, 10)).reduce(reducer, 0);
  return totalAges;
}

function dupesArray(input) {
  const unique = new Set(input);

  return unique;
}

module.exports = {
  objectDestructureAssignment,
  arrayDestructureAssignment,
  arrayMethodsAdmin,
  arrayMethodsTotalAge,
  dupesArray,
};
