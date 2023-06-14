function unluckyDays(year){
    let days = 365
    let res = 0
    if (year % 400 == 0 || year % 4 == 0) days = 366;
    for (let i = 1; i<=366;i++) {
        // let date = 
        if (new Date(year, 0, i).getDay() == 5 && new Date(year, 0, i).getDate() == 13)res++;
    }
    return res
}

console.log(unluckyDays(1586))