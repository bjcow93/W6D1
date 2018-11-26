// function sum() {
//   let array = Array.from(arguments);
//   let sum = 0;
//
//   array.forEach((num) => sum += num);
//   return  sum;
// }
//
// function sum2(...args) {
//   let sum = 0;
//
//   args.forEach((num) => sum += num);
//   return  sum;
// }
//
//
//
//
// Function.prototype.myBind = function () {
//   let array = Array.from(arguments);
//   const func = this;
//
//   return function() {
//     let args = Array.from(arguments);
//     return func.apply(array[0], array.slice(1).concat(args));
//   };
// };
//
//
// Function.prototype.myBind2 = function (ctx, ...bindArgs) {
//   return (...callArgs) => {
//     return this.apply(ctx, bindArgs.concat(callArgs));
//   };
// };


//curriedSum

// function curriedSum(numArgs) {
//   const nums = [];
//
//   const _curriedSum = function (num) {
//     nums.push(num);
//     if (nums.length === numArgs){
//       let sum = 0;
//       for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//       }
//         return sum;
//     } else {
//       return _curriedSum;
//     }
//   };
//   return _curriedSum;
// }

Function.prototype.curry = function(numArgs) {
  let nums = [];
  let func = this;

  const _curriedSum = function () {
    let args = Array.from(arguments);
    nums = nums.concat(args);
    if (nums.length >= numArgs){
      return func.apply(func, nums);
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};
