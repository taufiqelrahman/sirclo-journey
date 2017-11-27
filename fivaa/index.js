const answer = new Array()

let a = 0
for (let j = 0; j < 5; j++) {
  let b = a + 2

  let line = ''
  for (let i = 0; i < 2; i++) {
    line += a
  }
  for (let i = 0; i < b - 1; i++) {
    line += b
  }
  answer.push(line)
  a++
}
answer.reverse().map(line => console.log(line))