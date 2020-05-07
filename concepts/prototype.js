/* eslint-disable */
// TODO: enable linting

const F = function () {
  this.a = 1;
  this.b = 7;
};
const o = new F();
// {a: 1, b:2}
F.prototype.b = 3;
F.prototype.c = 4;

//
console.log(o.a);

//
console.log(o.b);

console.log(o.c);

console.log(o.d);

const q = {
  a: 2,
  m() {
    return this.a + 1;
  },
};

// expecting to print 3
console.log(q.m());

const p = Object.create(o);

p.a = 4;
console.log(p.m());

// inheriting object this points to inheriting object and not prototype

const a = { a: 3 };

const b = Object.create(a);

// expecting to see 3
console.log(b.a);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
}

const myFather = new Person('John', 'Doe', 50, 'blue');
console.log(myFather);

// object.hasOwnProperty;
