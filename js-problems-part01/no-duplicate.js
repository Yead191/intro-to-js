/**
 * array has some duplicate numbers
 * []
 */

const biriyaniKhor = ['abul', 'kabul', 'babul', 'chabul','babul', 'abul', 'dabul', 'fabul', 'dabul',]

const numbers = [12, 32, 33, 63, 12, 74, 33, 4, 7, 4, 63]


function noDuplicate(array) {

    const unique = []
    for (const element of array) {
        if (unique.includes(element)===false) {
            unique.push(element)
        }


    }
    return unique

}

const noDupli = noDuplicate(numbers)
console.log(noDupli);