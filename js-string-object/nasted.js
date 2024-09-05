const college = {
    name: 'Ideal College, Dhanmondi',
    class: 'XI, XII',
    events: ['science fair', 'bijoy dibosh', '21 feb'],
    unique: {
        color: ['blue', 'black', 'green' ],
        merit:{
            gpa5: 230,
            gpa4: 100,
            failed: 2
        }

    }
}

// console.log(college);
college.unique.color[2] = 'yellow'
college.unique.merit.failed= 5

// console.log(college.unique.merit);
console.log(college['unique'].color);



// delete

delete college.class
console.log(college);