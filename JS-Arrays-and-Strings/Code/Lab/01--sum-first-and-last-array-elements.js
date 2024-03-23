function solve(numbers) {
    let firstNumber = numbers[0];
    let lastNumber = numbers[numbers.length - 1];
    let sum = firstNumber + lastNumber;
    console.log(sum);
}
solve([20, 30, 40]);

function solve (numbers){    
    let firstNumber = numbers.pop();
    let secNumber = numbers.shift();
    let sum = firstNumber + secNumber;
    console.log(sum);
}
solve ([20, 30, 40]);
