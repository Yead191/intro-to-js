// reverse = [7,6,5,4,3,2,1]
const numbers = [1, 2, 3, 4, 5, 6, 7]
// console.log(numbers);
// numbers.reverse()
// console.log(numbers); //basic style

// for of
const rev_numbers = []

for (const num of numbers) {
    // console.log(num);
    // rev_numbers.unshift(num)
}
// console.log(rev_numbers);

// for

for (let i = 0; i < numbers.length; i++) {
const num = numbers[i]
// rev_numbers.unshift(num)

    
}
// console.log(rev_numbers);



// reverse side
const revr_num = []
for (let i = numbers.length - 1; i >=0; i--) {
const num = numbers[i]
revr_num.push(num)
}
console.log(revr_num);
