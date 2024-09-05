const mobile = {
    brand: 'samsung',
    model: 'S23 Ultra',
    price: 93000,
    color: 'matte black',
    camera: '48mp',
    isNew: true
}

// for of: array
// for in: object

for (const prop in mobile) {
    console.log(prop,':' ,mobile[prop]);
    // console.log(mobile[prop]);
}
// op: 'brand', 'model', 'price', 'color', 'camera'

// for of

const keys = Object.keys(mobile)
console.log(keys);

for (const key of keys) {
    console.log(key,':',mobile[key]);
    
}