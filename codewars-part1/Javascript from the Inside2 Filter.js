Array.prototype.filter = function(foo,thisArg = this) {
    const arr = []
    const that = this
    let callback = foo
    if (thisArg && thisArg != this) {
        callback = foo.bind(thisArg)
    }
    for (let i=0; i<that.length; i++) {
        if(i in that) {
            if(callback(that[i],i,thisArg)) {
                arr.push(that[i])
            }
        }
    }
    return arr
}

console.log([1,2,3,4,5].filter(function(x, i, a) { a.push(x); return this[i] == i; }, [0, 1, 2, 3, 4]))