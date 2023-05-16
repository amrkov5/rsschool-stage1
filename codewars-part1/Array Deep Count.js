function deepCount(a){
    let result = 0
    a.forEach(element => {
        if (!Array.isArray(element)) {
            result++;
        } else {
            result++
            result += deepCount(element)
        };
    });
    return result
}

console.log(deepCount(["x", "y", ["z"]]))