import isFunction from './isFunction'

const checkAndRunCallback = (callback) => {
  if (!isFunction(callback)) {
    console.log(`callback must be a function declaration like this:' + '\n' + 'function (){ //do something }`);
    return;
  } else {
    callback();
  }
}

export default checkAndRunCallback
