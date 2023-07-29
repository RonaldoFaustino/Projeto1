module.exports.queryString = (obj) => {
  console.log(Object.entries(obj));
  const entries = Object.entries(obj).map((item) => {
    console.log(item);
    return `${item[0]}=${item[1]}`;
  });

  console.log(entries.join('$'));
  return entries.join('$');
};
