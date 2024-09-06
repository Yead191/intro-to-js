const person = ['rakib', 'nokib', 'sakib', 'akib', 'Lakib', 'anis', 'Ansu']

const sortedPerson = person.sort()
// console.log(sortedPerson);



// sort ---> ascending , descending 



const numbers = [4, 7, 6, 3, 2, 5, 1, 9]

const asc = numbers.sort()
// console.log(asc);



const num = [4, 7, 66, 33, 2, 52, 1, 9]


// const ascNum = num.sort() //not working
const ascNum = num.sort(function(a, b) {return a-b}) // for dsc = b-a
console.log(ascNum);
