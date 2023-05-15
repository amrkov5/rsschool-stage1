function formatDuration (seconds) {
    result = '';
    const arr = [];
    const format = {
        0:'year',
        1:'day',
        2:'hour',
        3:'minute',
        4:'second',
    };
    if (seconds == 0) return 'now';
    else {
        let second = seconds % 60;
        let minutes = Math.floor(seconds / 60);
        if (minutes > 59) minutes = minutes % 60;
        let hours = Math.floor(seconds / 3600);
        if (hours > 23) hours = hours % 24;
        let days = Math.floor(seconds / (24*3600));
        if (days > 364) days = days % 365;
        let years = Math.floor(seconds / (365*24*3600));
        arr.unshift(second);
        arr.unshift(minutes);
        arr.unshift(hours);
        arr.unshift(days);
        arr.unshift(years);
    };
    console.log(arr);
    let k = 1
    let count = arr.filter(el => el > 0).length
    console.log(count)
    for (let i = 0; i< arr.length; i++) {
        console.log(k)
        if (arr[i]) {
            if ( arr[i] > 1) {
                result += `${arr[i]} ${format[i]}s`;
            } else if (arr[i] == 1) result += `${arr[i]} ${format[i]}`;
            if (k < count-1) {
                result += ', ';
            } else if (k == count-1) result +=' and ';
            k++
        };
    };
    return result;
}


console.log(formatDuration(62))