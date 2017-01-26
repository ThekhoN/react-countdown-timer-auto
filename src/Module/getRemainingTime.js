const getRemainingTime = (endTime) => {
  //console.info('getRemainingTime is running. . .')
  if(!endTime){
    console.error('endTime not defined -_-');
    return;
  }
  let t = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const remainingTime =
  {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
  //console.info('remainingTime: ', remainingTime)
  return remainingTime;
}

export default getRemainingTime;
