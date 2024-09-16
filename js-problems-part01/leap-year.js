/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4; then it will be a leap year
 */


function isLeapYear(year) {
    if (year %100 !==0 && year%4 ===0) {
        // const result1 = console.log('Leap Year');
        return 'Leap Year'
        
    }
    else if(year%100===0 && year %400===0){
    //    const result2 = console.log('Leap Year');
       return 'Leap Year'
    }
    else{
        // const result3 =  console.log('is not leap year');
        return 'not Leap Year'
    }

    
}
const insertYear = 2100 ;
const isLeap = isLeapYear(insertYear)
console.log('Your inserted year is', isLeap);