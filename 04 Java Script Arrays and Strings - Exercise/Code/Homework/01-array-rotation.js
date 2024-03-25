function solve1 (array, number) {
    for (let i = 0; i < number; i++) {
        array.push(array.shift());
    }

    console.log(array.join(' '));
}
solve1([51, 47, 32, 61, 21], 2);