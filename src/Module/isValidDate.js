const isValidDate = (date) => {
  const d = date;
  const i_fSpace = d.indexOf(' ');
  const data_str = d.substr(0, i_fSpace);
  const matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(data_str);
  if (matches === null) return false;
  const d_ = matches[2];
  const m = matches[1] - 1;
  const y = matches[3];
  const composedDate = new Date(y, m, d_);
  return composedDate.getDate() == d_ && composedDate.getMonth() == m && composedDate.getFullYear() == y;
}

export default isValidDate
