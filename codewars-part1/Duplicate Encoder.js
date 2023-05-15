function duplicateEncode(word){
    wordArray = word.split('')
    let result = ''
    wordArray.map(el => {
        let count = 0;
        wordArray.forEach(element => {
            if (element.toLowerCase() == el.toLowerCase()) count++;
        });
        if (count > 1) {
            result+= ')'
        } else result +='('
    });
    return result
}

duplicateEncode('Success')