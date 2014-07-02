// module.exports = function(swig) {
//   var json = function(big_object) {
//     var array = [];
//     for (var object in big_object) {
//       array.push(object);
//     }
//     return array;
//   };
//   json.safe = true;
//   swig.setFilter('json', json);
// };