// moteur JS

// (function (require, module, exports, __filename, __dirname) {
//   console.log(module);
// });

const age = 20;

module.exports.age = age;
module.exports = age;

exports.age = age; // ok
exports = age; // NOT OK

console.log(__filename);
console.log(__dirname);
