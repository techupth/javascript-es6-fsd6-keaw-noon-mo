function sum(...num) {
  // Start coding here !
  let resultSum = 0;
  for (let item of num) {
    resultSum += item;
  }
  return resultSum;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8];

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
