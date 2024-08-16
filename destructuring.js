const actor = {
    name: 'Ananto',
    age: 30,
    phone: '01754632895',
    money: 1253658595

}


// object destructuring 

const {phone} = actor;

const {money, age:boyosh} = actor;
// console.log(phone);
// console.log(money);
// console.log(boyosh);


// array destructuring
const numbers = [45,23];
const [first , second] = numbers;
console.log(first, second); 

const [x,y] = [4,5];
console.log(x,y);

// advanced
function doubleThem(a,b){
    return [a*2, b*2];
}

const [prothom, ditiyo ] = doubleThem(4,6)
console.log(prothom, ditiyo);

const [color1, color2] = ['red', 'green', 'blue', 'white'];
console.log(color1, color2);

const [num1,,num3] = [5,4,7];
console.log(num1, num3);

const [item1,,item3] = ['apple', 'jambura', 'orange'];
console.log(item1, item3);