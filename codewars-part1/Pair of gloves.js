function numberOfPairs(gloves) {
    let result = 0;
    const glovesSet = new Set(gloves);
    // console.log(glovesSet)
    glovesSet.forEach(el => {
        let count = 0;
        gloves.forEach(elem => {
            if(el == elem) {
                count++;
            };
        });
        if (count > 1) {
            result += Math.floor(count / 2);
            console.log(el,Math.floor(count / 2))
        };
    });
    return result
}
const gloves = [
    'Black',   'Purple',  'Lime',    'Maroon', 'Navy',   'Navy',
    'White',   'Yellow',  'Black',   'Navy',   'Black',  'Gray',
    'Fuchsia', 'Black',   'Red',     'Red',    'White',  'Teal',
    'Green',   'Red',     'Red',     'Gray',   'Yellow', 'Navy',
    'Purple',  'Fuchsia', 'Fuchsia', 'Gray',   'Purple', 'Olive',
    'Fuchsia', 'Navy',    'Purple',  'Yellow', 'Black',  'Purple',
    'Maroon',  'Silver',  'Teal',    'Gray',   'Aqua',   'Black',
    'Navy',    'White',   'Yellow',  'Purple', 'Navy',   'Yellow',
    'Olive',   'Aqua',    'White',   'Gray',   'Lime',   'Green',
    'Olive',   'Green',   'Purple',  'White',  'Gray',   'Teal',
    'White',   'Yellow',  'Lime',    'Silver', 'Navy',   'Yellow',
    'Yellow',  'Black',   'Gray',    'Yellow', 'White',  'Red',
    'Red',     'Gray',    'Silver',  'Maroon', 'Purple', 'Silver',
    'Silver',  'Olive',   'Purple',  'Yellow', 'Black',  'Navy'
  ]
console.log(numberOfPairs(gloves))
// Set(15) {
//     'Black',
//     'Purple',
//     'Lime',
//     'Maroon',
//     'Navy',
//     'White',
//     'Yellow',
//     'Gray',
//     'Fuchsia',
//     'Red',
//     'Teal',
//     'Green',
//     'Olive',
//     'Silver',
//     'Aqua'
//   }