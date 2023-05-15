function explode(s) {
  const result = []
  s.split('').map(el => result.push(el.repeat(Number(el))))
  return result.join('');
}