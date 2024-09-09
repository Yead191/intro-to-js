/**
 * Objective: write a function to give me the some of all numbers in an array
 * 
 * 1. declare a function
 * 2. call check whether the function is called properly
 * 3. set a parameters
 * 4. pass the parameters, check whether parameter is passed in a proper format
 * 5. do the function task
 */


function sumOfNumbers(numbers) {
    let sum = 0
    for (const number of numbers) {
        console.log(number);
        sum = sum +number
    }
    return sum
}

const nmbs = [13, 12, 65, 38, 83, 73]


const sum = sumOfNumbers(nmbs)
console.log('Sum of numbers is:' ,sum);