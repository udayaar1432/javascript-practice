function countwords(input) {
    // debugger;
    let c = 0;
    // let orangeCount = 0;

    const result = {};

    for (let b = 0; b < input.length; b++) {
        const word = input[b];
        // result[word] = result[word] ? result[word]++ : 1
        if (word in result) {
            result[word] = result[word] + 1;
        } else {
            result[word] = 1
        }
    }
    return result
}
console.log(countwords(["apple", "orange", "apple", "apple", "orange"]));