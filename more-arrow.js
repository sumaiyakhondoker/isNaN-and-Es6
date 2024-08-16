// 2 parameters
const difference = (x, y) => x+y;
const dif = difference(5,4);
// console.log(dif);


// 3 parameters
const multiply = (first, second, third) => first * second * third;
const mult = multiply(4,2,3);
// console.log(mult);

// 1 parameter
// object as a parameter
const getAge = (person) => person.age;
const student = {name: 'ananta', age:45};
const age = getAge(student);
// console.log(age);

// array as a parameter
const getThird = numbers => numbers[3];
const third = getThird([12,45,3,6,85]);
// console.log(third);

//  a number as a parameter
const doubleIt = num => num *2;
const result = doubleIt(4);
// console.log(result);

// no parameter
const getPI = ()=> Math.PI;
console.log(getPI());

// large arrow function
const doMath = (x,y,z)=> {
    const sum = x + y +z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;

    
}

const result2 = doMath(4,2,6);
console.log(result2);