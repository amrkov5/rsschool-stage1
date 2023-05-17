function sortByBit(arr) {
    arr.sort((a,b) => {
        console.log('initial a',a)
        console.log('initial b',b)
        if(a.toString(2).split('').filter(el => el == 1).length > b.toString(2).split('').filter(el => el == 1).length) {
            console.log(a,' > ',b)
           return 1
        } else if (a.toString(2).split('').filter(el => el == 1).length < b.toString(2).split('').filter(el => el == 1).length) {
            console.log(a,' < ',b)
           return -1
        } else {
            console.log(a,' = ',b)
            if(a > b) {
                console.log('after = ', a, '>', b)
                return 1
            } else {
                console.log('after = ', a, '<', b)
                return -1
            }
        }
    });
    console.log(arr)
}
// k = ['11','1000','11','110','101','111','1001','1']
console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))
// m = [1,3,5,9,7,8,4,2,1,5,4,9,6]
// console.log(m.sort())