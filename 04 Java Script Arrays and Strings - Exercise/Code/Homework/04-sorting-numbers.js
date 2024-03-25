function solve(numbers){
let sortenNumbers = numbers.sort((a, b) => a-b);
const result = [];
while(sortenNumbers.length>0){
    let firstNumber = sortenNumbers.shift();
    let lastNumber = sortenNumbers.pop();
    result.push(firstNumber);
    if(lastNumber){
        result.push(lastNumber)
    }
}
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])