// Array.prototype.map = function(arg,foo) {
//     foo(arg)
// }
function foo() {
    console.log(this)
    // return this.one + this.two
    
}
let arr = [3]

Array.prototype.anton = function(one,two,three,foo) {
    return foo()
    // console.log(this)

}


console.log(arr.anton(1,4,3,foo))




// var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var multiply_by_two = function(x) { return x * 2 };
// var one_to_nine_doubled = one_to_nine.map(multiply_by_two);