jsQuiz Notes go here!

function objectDestructureAssignment() {
  const user = {
    name: "John Doe",
    address: {
      street1: "123 Smith Street",
      zip: "91362"
    }
  };

const {name, address: {zip}} = user

  console.log(name, zip);
}

function arrayDestructureAssignment() {
  const array = ["one", "two", "three"];
  const [first, second, third] = array
  console.log(first, third)
}


function arrayMethods() {
  const users = [
    { fName: "Jim", age: 50, isAdmin: true },
    { fName: "Sarah", age: 20, isAdmin: false },
    { fName: "Alice", age: 25, isAdmin: true }
  ];

  const adminArray = users.filter((person)=>{
    return person.isAdmin === true;
  })

    // const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(adminArray)
  const totalAges = users.map(person => parseInt(person.age,10)).reduce(reducer,0)
  console.log(totalAges)
}

function dupesArray() {
  const array = [0, 1, 2, 1, 0, 3, 2, 1]

  console.log(unique)
}

objectDestructureAssignment();
arrayDestructureAssignment();
arrayMethods();
dupesArray();
