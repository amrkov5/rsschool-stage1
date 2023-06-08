Array.prototype.filter = function(foo,thisArg = this) {
    const arr = []
    const that = this
    let callback = foo
    let maxLength = that.length
    if (thisArg && thisArg != this) {
        callback = foo.bind(thisArg)
    }
    for (let i=0; i<maxLength; i++) {
        if(i in that) {
            if(callback(that[i],i,that)) {
                arr.push(that[i])
            }
        }
    }
    return arr
}

console.log('answer = ',[1,2,3,4,5].filter(function(x, i, a) { 
    a.push(x); 
    console.log('x = ', x);
    console.log('this[i] = ',this[i])
    console.log('a = ', a)
    return this[i] == i; }, [0, 1, 2, 3, 4]))