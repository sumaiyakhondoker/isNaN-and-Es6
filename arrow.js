// function declaration
function add(a,b){
    return a+b;

}

// const sum = add(5,85);
// console.log(sum);


// function expression
const add2 = function(a,b){
    return a+b;
}

const result = add2(2,5);
console.log(result);
// arrow function
const add3 = (a,b) => a+b;
// const sum = add3(52,12);


const add4 = (number1, number2, number3, number4)=> number1 + number2 + number3 + number4;

const sum = add4(4,5,6,7);
// console.log(sum);

const multiply = (num1, num2)=> num1 * num2;
const mult = multiply(12,3);
console.log(mult);

