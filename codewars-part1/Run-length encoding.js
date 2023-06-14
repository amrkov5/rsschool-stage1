var runLengthEncoding = function(str){
    const res = []
    let prev = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i+1]) {
            res.push([str.slice(prev, i+1).length, str[i]]);
            prev = i+1;
        };
        
    }
    return res
  }