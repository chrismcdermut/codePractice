function debounce(fn, time) {
  let timeout;

  return function callFunction() {
    const functionCall = () => fn.apply(this);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
}

module.exports.runDebounce = function runDebounce() {
  debounce();
};
