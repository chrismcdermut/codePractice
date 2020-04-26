// let exports = module.exports = {};
let x = {}
module.exports = {
  runYakovChain: function() {
    let counter = 0;
    const myArray = ["Yaakov", 2, {handle:"YaakovChain"}];
    for(let i=0;i<myArray.length;i++){
      counter++;
    }
    console.log('counter');
    console.log(counter);
  },
  querySelector: function() {
    // <input id="name" type="text" value="Hi" />
    console.log(document.getElementById('name').value+" Hello world");
    console.log(document.querySelector('#name').value+" Hello world");
    //both will successfully grab the value in the html as query selector uses css selectors
  },
  printHello: function() {
    let x = 10;
    if((null)||(console.log("Hello"))||x>5){
      console.log("Hello");
    }
    //this will print hello twice
  },
  seniorAge: function() {
    let myLiteralObj = {
      age:20,
      setAge:(newAge)=>{
        console.log('setAge, this'+JSON.stringify(this));
        console.log('setAge, this.age:'+this.age);
        console.log('setAge, newAge:'+newAge);
        this.age = newAge;
      },
      getAge: ()=>this.age,
      setAgeNew:function(newAge){
        console.log('setAge, this'+JSON.stringify(this));
        console.log('setAge, this.age:'+this.age);
        console.log('setAge, newAge:'+newAge);
        this.age = newAge;
      },
      getAgeNew: function(){
        return this.age
      },
      getSeniorStatusThroDirectAccess: function() {
        console.log('getSeniorStatusThroDirectAccess'+this.age);
        if(this.age>55) { //Note direct attribute access
          console.log("Senior");
          return "Senior"
        } else {
          console.log("Not Senior");
          return "Not Senior"
        }
      },
      getSeniorStatusThroGettor: function() {
        console.log('getSeniorStatusThroGettor'+this.getAge());
        if(this.getAgeNew()>55) {
          console.log("Senior");
          return "Senior"
        } else {
          console.log("Not Senior");
          return "Not Senior"
        }
      }
    }
    myLiteralObj.setAgeNew(57);
    // myLiteralObj.setAge(57);
    console.log("DirectAccess: "+myLiteralObj.getSeniorStatusThroDirectAccess());
    console.log("Through gettor: "+myLiteralObj.getSeniorStatusThroGettor());
    console.log("getAge: "+myLiteralObj.getAge());
  },
  curryMultiply: function() {
    function makeMultiplier(multiplier){
      const myFunFunc = function(x){
        return multiplier*x
      }
      return myFunFunc;
    }
    const operation = makeMultiplier(10);
    console.log('operation(10)');
    console.log(operation(10));
  },
  iifeWindow: function(){
    (function(window){
      let obj = {};
      obj.dreamOn = function(){
        console.log("I am just fine. Let me out.");
      };
      window.doer = obj;
    })(window);
    doer.dreamOn;
  },
  iife: function(){
    (function(window){
      let obj = {};
      obj.dreamOn = function(){
        console.log("I am just fine. Let me out.");
      };
      window.doer = obj;
    })(x);
    doer.dreamOn;
  },
  domLoaded: function(){
    document.addEventListener("DOMContentLoaded", function(event){
      console.log('Hello World!');
    })
  },
  circleArea: function(){
    //https://javascript.info/constructor-new
    let Circle = function(radius){
      this.radius = radius;
      this.getArea = function(){
        return Math.PI*Math.pow(this.radius,2);
      }
    }
    let myCircleNew = new Circle(5)
    console.log("myCircleNew... logs");
    console.log(myCircleNew.getArea());
    let myCircleDirectCall = Circle(10);
    console.log("myCircleDirectCall... logs");
    console.log(myCircleDirectCall);
  }
}
