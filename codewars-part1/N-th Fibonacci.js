function nthFibo(n) {
    const num = [0,1];
    let result = 0;
    let i=0;
    if (n <3) return n-1
    while (i < n-2) {
        result = num[0]+num[1];
        num[0] = num[1];
        num[1] = result;
        console.log(num);
        console.log(result);
        i++;
    }
}

nthFibo(4)