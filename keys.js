const glass = {
    name:'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
// console.log(glass);

const keys = Object.keys(glass);
// console.log(keys);

const values = Object.values(glass);
// console.log(values);

const pair = Object.entries(glass);
// console.log(pair);

// delete glass.isCleaned;
// console.log(glass);

// const  {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// freeze 
// Object.freeze(glass)
// glass.source = 'bangladesh';

// glass.price = 5000;
// delete glass.name;
// console.log(glass); 

// seal
Object.seal(glass)
glass.source = 'bangladesh';

glass.price = 5000;
delete glass.name;
console.log(glass); 