function myLanguages(results) {
    const res = []
    const arr = Object.entries(results).sort((a,b) => b[1]-a[1])
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][1] > 60)
        if (arr[i][1] > 60) {
            res.push(arr[i][0])
        }
    }
    return res
}

console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71} ))