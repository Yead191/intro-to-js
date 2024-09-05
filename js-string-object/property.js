const person = {
    name: 'Asadur Rahaman Yead',
    age: 23,
    profession: 'Developer',
    Salary: 25000,
    married: false,
    'fav places': ['cox bazar', 'saint martin', 'rangamati']
}


// dot notation
// console.log(person);
// console.log(person.Salary);
const income = person.Salary;
console.log(income);


// braket notation

console.log(person["age"]);

// error
// console.log(person.'fav places');

// correct
console.log(person["fav places"]);
