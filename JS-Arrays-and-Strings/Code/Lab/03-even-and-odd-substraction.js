function solve (arr){
let oddArr = arr. filter(element => element%2 == 0);
let evenArr = arr. filter(element => element%2 != 0);
let oddSum = oddArr.reduce((a, b) => a + b, 0);
let evenSum = evenArr.reduce((a, b) => a + b, 0);
console.log(oddSum - evenSum);
}
solve ([1,2,3,4,5,6]);