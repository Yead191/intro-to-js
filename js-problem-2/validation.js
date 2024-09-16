//check if the provided input is number
function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number'
    };

    const mul = num1 * num2
    return mul

}

const mul = multiply(5, 7)
// console.log(mul);


//check if the provided input is string

function fullName(first, last) {
    if (typeof first !== 'string' || typeof last !== 'string') {
        return 'Please provide your name correctly'

    };
       
    const full = first + ' ' + last
    return full

}

const full = fullName('yead191', 'rahad')
// console.log(full);


//check whether the provided input is object

function getPrice(product) {
    if (typeof (product) !== 'object') {
        return 'please provide an object'
    };


    const price = product.price
    return price


}


// const price = getPrice({name: 'molom', price: 54 , color: 'blue'})
const price = getPrice('yead')

// console.log(price);


//check whether the provided input is array

function getSecond(numbers) {
    if (Array.isArray(numbers)===false) {
        return 'please provide an array'
        
    }

    const second = numbers[2]
    return second

}

const second = getSecond([32, 55, 73, 7])
// const second = getSecond()
// console.log(second);




function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }


    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
       if (!isNaN(name[i]) && name[i] !== ' ') {
        return true
        
       }
       
        
    }
    return false

    

}

const name = checkDigitsInName(["Raj"])
console.log(name);

