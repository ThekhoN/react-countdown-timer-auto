const isFunction = (obj) => {
  const getType = {};
  return obj && getType.toString.call(obj) === '[object Function]';
}

export default isFunction
