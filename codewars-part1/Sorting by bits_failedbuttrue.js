function sortByBit(arr) {
    const copyarr = arr.slice(0);
    const binArr = [];
    let result = [];
    for (let i = 0; i<copyarr.length; i++) {
        // binArr.push([]);
        let count = 0
        while (copyarr[i] > 0) {
            if (copyarr[i]%2 === 1) {
                count++
            };
            copyarr[i] = Math.floor(copyarr[i]/2);
        };
        binArr.push(count);
    };
    for (let i = 0; i<=Math.max(...binArr); i++) {
        let storArr = [];
        for (let k = 0; k < binArr.length; k++) {
            if(binArr[k] == i) {
                storArr.push(arr[k]);
            };
            // console.log(i)
        };
        result = result.concat(storArr.sort((a,b) => a-b))
        // console.log(storArr)
    };
    // console.log(binArr)
    return result

    // arr.forEach(element => {
    //     binArr[]
    //     binArr.push(Number(element.toString(2)));
    // });
    // console.log(Math.max(...binArr.length))
  }

  console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))

//   console.log()