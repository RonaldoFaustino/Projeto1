const KeyValueToString = ([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      throw new Error('Please check yout params');
    }
    return `${key}=${value}`;
  }

module.exports.queryString = obj =>
  Object.entries(obj)
    .map(KeyValueToString)
    .join('$');

///////////////////////////1 Condigo antes da refatoração
//{
//   console.log(Object.entries(obj));
//   const entries = Object.entries(obj).map((item) => {
//     console.log(item);
//     return `${item[0]}=${item[1]}`;
//   });

//   console.log(entries.join('$'));
//   return entries.join('$');
////////////////////////////////////////////////////////

///////////////////////////2 Condigo antes da refatoração
//   return Object.entries(obj)
//     .map((item) => {
//         console.log(item);
//         return `${item[0]}=${item[1]}`;
//   }).join('$');
////////////////////////////////////////////////////////
//};
