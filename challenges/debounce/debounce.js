function debounce(fn, time) {
  let timeout;

  return function callFunction() {
    const functionCall = () => fn.apply(this);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
}

function debounce2(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

module.exports = { debounce, debounce2 };

module.exports.runDebounce = function runDebounce() {
  debounce();
};
