function calculate(...arr1) {
    return (...arr2) => {
        return arr1.reduce((acc,cur) => acc + cur) + arr2.reduce((acc,cur) => acc + cur);
    };
}

console.log(calculate(2,4)(3,7,1))