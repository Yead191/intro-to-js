

const today = new Date()
console.log(today);

const date = new Date('2062-10-19')
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2091, 0, 25)
console.log(specificDate);
specificDate.setMonth(7)
console.log(specificDate.toLocaleString('en-GB'));


//unix epoch