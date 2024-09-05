const school = 'Poura Shahid smrity academy'
// console.log(school.length);


// convert to lowercase and uppercase 


console.log(school.toLowerCase());
console.log(school.toUpperCase() );

// uppercase: ABCD EFG
// lowercase: abcd efg

const subject = 'Bangla'
const book = 'bangla'

if (subject.toLowerCase() === book.toLowerCase() ) {
    console.log('ei sub a kop dibo ebar');
    
}
else{
    console.log('ekhno boi e dorinai, pass korbo kmne');
}



// trim ----> eta diye age. pore ba 2 pasher faka space trim kore ba bad dey


const drink = ' water'
const liquid = '  water  '

if (drink.trim() === liquid.trim()) {
    console.log('panir opor name gibon');
    
}
else{
    console.log('panir opor name abr moron');
}