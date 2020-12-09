/* eslint no-console: 0 */

const z = {};
module.exports = {
  runYakovChain() {
    let counter = 0;
    const myArray = ['Yaakov', 2, { handle: 'YaakovChain' }];
    for (let i = 0; i < myArray.length; i += 1) {
      counter += 1;
    }
    console.log('counter');
    console.log(counter);
  },
  querySelector() {
    // <input id="name" type="text" value="Hi" />
    console.log(`${document.getElementById('name').value} Hello world`);
    console.log(`${document.querySelector('#name').value} Hello world`);
    // both will successfully grab the value in the html as query selector uses css selectors
  },
  printHello() {
    const x = 10;
    if (null || console.log('Hello') || x > 5) {
      console.log('Hello');
    }
    // this will print hello twice
  },
  seniorAge() {
    const myLiteralObj = {
      age: 20,
      setAge: (newAge) => {
        console.log(`setAge, this${JSON.stringify(this)}`);
        console.log(`setAge, this.age:${this.age}`);
        console.log(`setAge, newAge:${newAge}`);
        this.age = newAge;
      },
      getAge: () => this.age,
      setAgeNew(newAge) {
        console.log(`setAge, this${JSON.stringify(this)}`);
        console.log(`setAge, this.age:${this.age}`);
        console.log(`setAge, newAge:${newAge}`);
        this.age = newAge;
      },
      getAgeNew() {
        return this.age;
      },
      getSeniorStatusThroDirectAccess() {
        console.log(`getSeniorStatusThroDirectAccess${this.age}`);
        if (this.age > 55) {
          // Note direct attribute access
          console.log('Senior');
          return 'Senior';
        }
        console.log('Not Senior');
        return 'Not Senior';
      },
      getSeniorStatusThroGettor() {
        console.log(`getSeniorStatusThroGettor${this.getAge()}`);
        if (this.getAgeNew() > 55) {
          console.log('Senior');
          return 'Senior';
        }
        console.log('Not Senior');
        return 'Not Senior';
      },
    };
    myLiteralObj.setAgeNew(57);
    console.log(
      `DirectAccess: ${myLiteralObj.getSeniorStatusThroDirectAccess()}`,
    );
    console.log(`Through gettor: ${myLiteralObj.getSeniorStatusThroGettor()}`);
    console.log(`getAge: ${myLiteralObj.getAge()}`);
  },
  curryMultiply() {
    function makeMultiplier(multiplier) {
      const myFunFunc = function myFunFunc(y) {
        return multiplier * y;
      };
      return myFunFunc;
    }
    const operation = makeMultiplier(10);
    console.log('operation(10)');
    console.log(operation(10));
  },
  iifeWindow() {
    (function iifeWindow(windowArg) {
      const window = windowArg;
      const obj = {};
      obj.dreamOn = function dreamOn() {
        console.log('I am just fine. Let me out.');
      };
      window.doer = obj;
    }(window));
    doer.dreamOn(); // eslint-disable-line no-undef
  },
  iife() {
    (function iife(windowArg) {
      const window = windowArg;
      const obj = {};
      obj.dreamOn = function dreamOn1() {
        console.log('I am just fine. Let me out.');
      };
      window.doer = obj;
    }(z));
    doer.dreamOn(); // eslint-disable-line no-undef
  },
  domLoaded() {
    document.addEventListener('DOMContentLoaded', (event) => {
      console.log('Hello World! Here\'s event:');
      console.log(event);
    });
  },
  circleArea() {
    // https://javascript.info/constructor-new
    const Circle = function Circle(radius) {
      this.radius = radius;
      this.getArea = function getArea() {
        return Math.PI * this.radius ** 2;
      };
    };
    const myCircleNew = new Circle(5);
    console.log('myCircleNew... logs');
    console.log(myCircleNew.getArea());
    const myCircleDirectCall = Circle(10);
    console.log('myCircleDirectCall... logs');
    console.log(myCircleDirectCall);
  },
};
