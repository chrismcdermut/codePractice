/* eslint-disable */
// TODO: enable linting

const debounce = (fn, time) => {
  let timeout;

  return function () {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

module.exports.runDebounce = function () {
  debounce();
};
