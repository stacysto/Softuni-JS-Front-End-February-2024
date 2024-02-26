function solve(number){
    let lastDigit;
    let sum = 0;
    while(number>0){
        lastDigit = (number%10);
        sum = sum + lastDigit;
        number = Math.floor(number/10);
    }
    console.log(sum);
}

// Solve with strings
function solveWithStrings(number){
    let textNumber = number.toString();
    let firstDigit;
    let sum = 0;
    for(let i = 0; i<textNumber.length; i++){
firstDigit = textNumber[i];
sum = sum + Number(firstDigit);
    }
    console.log(sum)
}
solveWithStrings (33);
