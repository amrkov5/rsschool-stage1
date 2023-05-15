function brightest(colors){
    const decimalColors = []
    let result = ''
    colors.forEach(element => {
        let r = parseInt(element.slice(1,3),16)
        let g = parseInt(element.slice(3,5),16)
        let b = parseInt(element.slice(5),16)
        decimalColors.push(Math.max(r,g,b))
    });
    console.log(decimalColors)
    console.log(colors[decimalColors.indexOf(Math.max(...decimalColors))])
}

let colors = ["#FFFFFF", "#123456", "#000000"]

brightest(colors)