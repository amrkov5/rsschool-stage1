function getLengthOfMissingArray(arrayOfArrays) {
    console.log(arrayOfArrays)
    if (!Array.isArray(arrayOfArrays) || arrayOfArrays.length == 0) return 0;
    let lengthArr = [];
    arrayOfArrays.forEach(element => {
        if (Array.isArray(element) && element.length) {
            lengthArr.push(element.length);
        };
    });
    if (arrayOfArrays.length > lengthArr.length) return 0;
    lengthArr = lengthArr.sort((a,b) => a-b);
    for (let i = 0; i< lengthArr.length-1; i++) {
        if (lengthArr[i] - lengthArr[i+1] != -1) return (lengthArr[i] + 1);
    };
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]))
// console.log(getLengthOfMissingArray([[], [ 1, 2, 2 ]]))
// console.log([].length)