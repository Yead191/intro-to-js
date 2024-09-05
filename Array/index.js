// task -1
/**
 * 1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
 */



const fruits = ['mango', 'apple', 'banana', 'pineapple', 'orange', 'lemon'];

const fifth = fruits[4]
console.log(fruits[3])
console.log(fifth)

fruits[1] = 'jambura'
console.log(fruits)


/** task-2
 * 2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
 */

let places = ['bali', 'coxs bazar', 'dubai']

places.push('saint martin')
places.push('maldeves', 'sajek')
places.pop()


// shift diye first element remove hoy . r unshift diye first element a add hoy.

console.log(places);


/** task-3
 * 3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
 */


const book = ['bangla', 'english', 'math', 'science']

if (book.includes('javascript')) {
    console.log('your book is found')
}
else {
    console.log('book not found')
}


/** task 04
 * 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */

const number = 12;
const names = ['yead', 'rahad', 'rahi']
const ntg = '[]'


console.log(Array.isArray(number))
console.log(Array.isArray(names))
console.log(Array.isArray(ntg))

/** task-5  (concat method)
 * 5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
 */


const mobileName = ['apple', 'samsung', 'one-plus', 'xiaomi', 'realme']

const laptopName = ['macbook', 'hp', 'dell', 'asus', 'microsoft'];

const result = (mobileName.concat(laptopName));

console.log(result)






