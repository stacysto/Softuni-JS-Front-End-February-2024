function solve (string, word){
string = string.replaceAll(word, '*'.repeat(word.length));
console.log(string);
}
solve('Find the hidden word', 'hidden');