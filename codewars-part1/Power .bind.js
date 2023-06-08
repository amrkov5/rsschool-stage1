Function.prototype.bind = function(ctx) {
    let fn = this
    let resFunc = function() {
        if (!resFunc.orig) {
            resFunc.orig = fn
            return fn.call(ctx)
        } else {
            return resFunc.orig.call(ctx)
        }
    }
    resFunc.orig = fn.orig
    return resFunc
};


var func = function () {
  return this.prop;
};

var obj1 = {prop: 1},
    obj2 = {prop: 2};

func = func.bind(obj1);
console.log(func.toString())
console.log(func)
func = func.bind(obj2);
console.log(func.toString())



















// Function.prototype.mybind = function(ctx) {
//     let func = this
//     let resFunc = function () {
//         if (!resFunc.orig) {

//             resFunc.orig = func
//             return func.call(ctx)
//         } else {
//             return resFunc.origin.call(ctx)
//         }
//     }
//     return resFunc
// };

// const foo = function () {
//     return this.arg1 + this.arg2
// } 

// const args1 = {
//     arg1: 1,
//     arg2: 10
// }

// const args2 = {
//     arg1: 2,
//     arg2: 10
// }

// const args3 = {
//     arg1: 3,
//     arg2: 10
// }

// let foo1 = foo.mybind(args1);
// // console.log('modified bind1 F ',foo1)
// console.log('modified bind F() ', foo1())
// // console.log(global.func)
// // console.log('modified bind F.tostring ',foo1.toString());
//  foo1 = foo.mybind(args2);
// // console.log('modified bind2 F ',foo1)
// console.log('modified bind2 F() ',foo1())
// // console.log('modified bind F.tostring ',foo1.toString());
// // foo1 = foo.bind(args2);
// // console.log(foo1);
// // foo1 = foo.bind(args3);
// // console.log(foo1);
