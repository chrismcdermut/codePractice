/* eslint-disable */

const text = 'outside';
function javaScriptPractice() {
  console.log(text);
  var text = 'inside';
}

function inspireFear(threatLevel){
threatLevel += 100;
}

function turnOn(machine) {
    machine.isOn = true;
}

function turnOnNewObject(machine) {
    machine={
      isOn:true
    }
}

module.exports = {javaScriptPractice,inspireFear,turnOn,turnOnNewObject};
