Array.prototype.map = function(foo,thisArg = 0) {
    console.log('initial arr',this)
    // console.log
      const arr = []
      let that = this
      let callback = foo
      if(thisArg) {
          callback = foo.bind(thisArg)
      }
      for (let i=0; i<that.length; i++) {
        console.log(that[i])
          if(!(i in that)) {
            console.log(typeof that[i])
            //   that[i] = undefined
              arr.push(that[i])
              console.log(arr)
          } else {
              arr.push(callback(that[i],i,that))
          }   
      }
    // console.log('final arr',arr)
    // console.log(typeof that[0])
    // console.log(typeof arr[0])
      return arr
  }
// console.log(null === null)
// console.log(new Array(2)[0])
// var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var multiply_by_two = function(x) { return x * 2 };
// var one_to_nine_doubled = one_to_nine.anton(multiply_by_two);
// var array_of_two = new Array(2).map(function(x) { return 1; });
// console.log(sum_with_context = [1,2,3].map(function(item, index) { return item + this[index]},[4,5,6]))
console.log(new Array(2).concat([null]).map(function(x) { return 1; }));
// console.log(sum_with_context)
// console.log(array_of_two)