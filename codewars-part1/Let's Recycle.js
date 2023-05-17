function recycle(array) {
    res = [[],[],[],[]]
    array.forEach(el => {
        if (el.material === 'paper' || el.secondMaterial === 'paper') {
            res[0].push(el.type)
        }
        if (el.material === 'glass' || el.secondMaterial === 'glass') {
            res[1].push(el.type)
        }
        if (el.material === 'organic' || el.secondMaterial === 'organic') {
            res[2].push(el.type)
        }
        if (el.material === 'plastic' || el.secondMaterial === 'plastic') {
            res[3].push(el.type)
        }
    });
    return res
}