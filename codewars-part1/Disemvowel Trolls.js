function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = [];
    str.split('').map(el => !vowels.includes(el.toLowerCase()) ? result.push(el) : null);
    return result.join('');
}

str = 'This website is for losers LOL!'

disemvowel(str)