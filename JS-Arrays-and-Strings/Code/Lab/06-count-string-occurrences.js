function solve (string, word){
    let words = string.split(' ');
let count = 0;
for (let w of words){
    if (w === word){
        count++;
    }
}
console.log(count);
}
solve ('softuni is great place for learning new programming languages',
'softuni'
);