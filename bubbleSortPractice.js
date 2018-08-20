const list = [12,34,45,23,1,89];

const bubbleSort = (list) => {
    //flag to say if we do it again

    let doItAgain = false;

}

let toplives = 3;

var cat = {
toplives:7,
innerfunc:{
  lives: 9,
  jumps: function jumps() {() => {
          console.log('logging this');
          console.log(this);
    this.toplives--;
  }}
}
}

var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log('logging', this.id);
    }, 0);
  }
};

obj.counter();

console.log('logging cat lives');
console.log(cat.toplives);
cat.innerfunc.jumps();
console.log('logging lives after');
console.log(cat.toplives)

console.log('toplives');
console.log(this.toplives);

const testFunctionNoVarDec = () => {
    id:13
    console.log('logging this');
    console.log(this);
}

testFunctionNoVarDec();

const testFunctionVarDec = () => {
    const id = 13;

    console.log('loggin var dec this');
    console.log(this);
}

testFunctionVarDec();

function funNoVarDec() {
    id:67
    console.log('loggint his in funnovardec');
    console.log(this);
}

funNoVarDec();

function funVarDec() {
    const id = 13;
    console.log('logging id in funvardec');
    console.log(this);
}

funVarDec();
