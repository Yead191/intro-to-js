
let a = 'yead'
let b = 9

console.log(a, b);

// a = b
// b = a
console.log(a, b);


const temp = a
a = b
b = temp
console.log(a, b);


let x = 'yead'
let y = 8
console.log(x,y);

[x, y] = [y, x]
console.log(x,y);