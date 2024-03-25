function solve(names) {
    names.sort((a, b) => a.localeCompare(b))
        .forEach((name, index) =>
            console.log(`${index + 1}.${name}`));
}
// for (i = 0; i<names.length; i++){
//     let number = names.indexOf(names[i])+1;
// console.log(`${number}.${names[i]}`);
// }
solve(["John", "bob", "Christina", "Ema"])