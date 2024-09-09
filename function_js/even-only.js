/**
 * create function that will return only even numbers
 * return the sum of the numbers
 * 
 * create the function that will return sum of even numbers
 */


function evenNumbersOnly(numbers) {
    const evens =[]

    for (const number of numbers) {

        if (number %2===0) {
            console.log(number);
            evens.push(number)
             
        }
        
    }
    return evens
    


}
// const num = [12, 56, 97, 73, 66, 82, 66]
// const even = evenNumbersOnly(num)

// console.log('even numbers are:', even);



// sum of even numbers

function sumOfEvenNumbers(numbers) {

    let sum =0

    for (const number of numbers) {
        if (number %2===0) {
            console.log(number);
            sum = sum + number

            
        }
        
    }
    return sum
    
}

const num = [12, 56, 79, 73, 66, 82, 66, 53, 33, 106]
const sumOfEven = sumOfEvenNumbers(num)
console.log('sum of even number are:', sumOfEven);
