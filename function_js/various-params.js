/**
 * for a given string tell me weather it has even number of characters or not
 */


function evnSized(str) {
    const length = str.length
    if (length % 2 === 0) {
        console.log('even size');
        return true
    }
    else {
        console.log('odd size');
        return false
    }
    console.log(str, length);


}

// evnSized('hi kemon acho')


function doubleOrTripple(number, double) {
    if (double == true) {
        const dbl = number * 2

        return dbl

    }
    else {
        const tri = number * 3
        return tri

    }

}

// console.log(doubleOrTripple(5,true));
// console.log(doubleOrTripple(9,false));


function numberOfElements(numbers) {
    const len = numbers.length
    return len

}

// console.log(numberOfElements([12, 43, 653, 67, 20, 64, 91]));

function getAge(person) {
    const age = person.age
    return age
    
}

