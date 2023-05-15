function isIsogram(str){
    mutStr = str.split('')
    for (let k = 0; k< mutStr.length; k++) {
        count = 0;
        for (let i = 0; i< str.length; i++) {
            mutStr[k].toLowerCase() === str.split('')[i].toLowerCase() ? count++ : null;
            console.log(count);
        }
        if (count > 1) {
            console.log('234234');
            return false;
        };
    };  
    console.log('11111')
    return true
}

str = 'aba'
console.log(isIsogram(str))