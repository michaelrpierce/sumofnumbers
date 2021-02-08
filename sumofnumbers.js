/* Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion,
 and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay */

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i++];
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 1) {
    return list[0];
  }
  let sum = list[list.length - 1];
  sum += sumRecursion(list.slice(0, list.length - 1));
  return sum;
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

const list = [1, 2, 3, 4];

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
