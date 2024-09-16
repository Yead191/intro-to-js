/**
 * function takes an array as parameters
 * gives me the average of the odd numbers in the array
 * 1. for loop chaliye odd ber kore  ekta array te rakhte hbe
 * 2. oi array k ebar arekta loop chaliye avg ber korte hbe
 */

function oddAverage(numbers) {
    const odds = []
    for (const number of numbers) {

        if (number % 2 === 1) {
            odds.push(number)

        }

    }

    // now find the avg

    let sum = 0
    for (const number of odds) {

        sum = sum + number

    }
    const len = odds.length
    const result = sum / len
    return result
    // console.log(sum, len);


}

const value = [12, 23, 65, 63, 26, 46, 73, 94, 17, 56]

const oddAvg = oddAverage(value)
console.log('Your odd average is:', oddAvg);