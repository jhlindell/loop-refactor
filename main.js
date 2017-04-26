'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  // sum: (arr, base) => {
  //   let sum = base;
  //   for (var i = 0; i < arr.length; i++){
  //     sum += arr[i];
  //   }
  //   return sum;
  // },

  sum: (arr, base) => arr.reduce(function(acc, curr){
      return acc += curr;
    }, base),

  // sum: (arr, base) => {
  //   return arr.reduce(function(acc, curr){
  //     return acc += curr;
  //   }, base);
  // },

  // someObjsContainProp: (arr, prop) => {
  //   for(var i = 0; i < arr.length; i++){
  //     if(arr[i].hasOwnProperty(prop)){
  //       return true;
  //     }
  //   }
  //   return false;
  // },

  someObjsContainProp: (arr, prop) => arr.some(function(element){
    return element.hasOwnProperty(prop);
  }),

  // convertNameArrayToObject: (arr) => {
  //   let nameObj = [];
  //   for(var i = 0; i < arr.length; i++){
  //     let obj = {};
  //     obj.first = arr[i][0];
  //     obj.last = arr[i][1];
  //     nameObj.push(obj);
  //   }
  //   return nameObj;
  // },

  convertNameArrayToObject: (arr) => arr.map(function(element) {
      let nameObj = {};
      nameObj.first = element[0];
      nameObj.last = element[1];
      return nameObj;
    }),


  // objContainsProp: (arr, prop) => {
  //   for (var i = 0; i < arr.length; i++){
  //     if(!arr[i].hasOwnProperty(prop)){
  //       return false;
  //     }
  //   }
  //   return true;
  // },

  objContainsProp: (arr, prop) => arr.every(function(element) {
    return element.hasOwnProperty(prop);
  }),

  // stringMatch: (arr, str) => {
  //   let matches = [];
  //   for(var i = 0; i < arr.length; i++){
  //     if (arr[i].includes(str)){
  //       matches.push(arr[i]);
  //     }
  //   }
  //   return matches;
  // },

  stringMatch: (arr, str) => arr.filter(function(element) {
    return element.includes(str);
  }),
};
