
function calculateTax(income, expenses) {
    if (income<expenses || income<0 ||expenses<0 || typeof income !== 'number' || typeof expenses !== 'number') {
        return "Invalid Input"
        
    }
    const remainingIncome = income - expenses

    const tax = remainingIncome *20/100;
    return tax
}




function sendNotification(email) {

    if (email.indexOf('@')===-1) {

        return "Invalid Email"   
    }
    
    const partition = email.split('@')
    const userName = partition[0]
    const domain = partition[1]
 
    const sendNotification = userName + ' sent you an email from ' + domain
    return sendNotification


}




function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }


    for (let i = 0; i < name.length; i++) {
       if (!isNaN(name[i])  && name[i] !== ' ') {
        return true
        
       }
       
        
    }
    return false
  

}




function calculateFinalScore(obj) {

    if(typeof obj !=='object'){
        return "Invalid Input"
    };

    if (typeof obj.name !== 'string' || 
        typeof obj.testScore !== 'number' || obj.testScore > 50  ||
        typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30 || typeof obj.isFFamily !== 'boolean'
    ) {
        return 'Invalid Input'
        
    }

    let finalScore = 0
    if (obj.isFFamily=== true ) {
        finalScore +=20    
    }
    
    const regScore = obj.testScore + obj.schoolGrade

    const calculateFinalScore = finalScore + regScore

    if (calculateFinalScore>= 80 ) {
        return true
        
    }
    return false


}




function  waitingTime(waitingTimes  , serialNumber) {

    if (Array.isArray(waitingTimes)=== false || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length) {
        return 'Invalid Input'

    }

    let sum= 0;

    for (const time of waitingTimes) {

        sum = time + sum
        
    }

    const len = waitingTimes.length


    const avgTime = Math.round(sum / len)


    let haveToWait = serialNumber - 1 -len
    haveToWait = avgTime * haveToWait

    return haveToWait
}


console.log(waitingTime([13, 2, 6, 7, 10], 4));

