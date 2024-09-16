// 12 inch = 1 feet


// function inchToFeet(inch) {
//     const height = inch/12
//     return height


// }


function inchToFeet(inch) {
    const height = inch / 12
    const feet = parseInt(height)
    const inchRemaining = inch % 12

    const result = feet + ' ft '+inchRemaining+' inch.'
    return result


}
const name ='yead'
const insertInch = 70
const person = inchToFeet(insertInch)
// console.log(name,'er height:', person);



function MileToKM(mile) {

    const km = mile *1.60934
    return km

    
}
const insertMile = 67;
const mToKm = MileToKM(insertMile)
console.log('Your converted km is:', mToKm);