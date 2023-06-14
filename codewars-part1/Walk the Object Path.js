function find(object, path) {
    let pathArr = path
    console.log('obj',object)
    if(typeof path == 'string') {
        pathArr = path.split('.')
    }
    if (!Object.keys(object).includes(pathArr[0])) {
        return undefined
    }
    if (pathArr.length == 1) {
        let res = object[pathArr[0]]
        return res
    }
    let nextPath = pathArr.shift()
    console.log(pathArr)
    console.log('pathArr[0]',pathArr[0])
    console.log('obj.patharr[0]',object[pathArr[0]])
    return find(object[nextPath],pathArr)
}
path = 'user.namde.first'
let object = { 
    user: { 
        name: { 
          first: 'John', 
          last: 'Snow' 
        }
    }
}
console.log(find(object,path))