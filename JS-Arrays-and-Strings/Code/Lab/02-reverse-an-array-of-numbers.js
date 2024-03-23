function solve (n, numbers){
let newNumbers = numbers
.slice(0, n)
.reverse()
.join(' ');
console.log(newNumbers);
}
solve (3, [10, 20, 30, 40, 50]);