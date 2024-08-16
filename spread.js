const max = Math.max(56,25,32,74,56,98,2,15,6);
// console.log(max);


// const numbers = [45,25,32,16,41,89,24,65];
// const arrayMax = Math.max(...numbers);
// console.log(...numbers);
// console.log(arrayMax);

// use spread operator to copy
const friends = [4,5,3,25];
const bondhu = friends;
// console.log(friends, bondhu);

// bondhu.push(12)
// console.log(friends, bondhu);

const dosto = [...friends];  // copy

friends.push(100);
// console.log(dosto);
// console.log(friends);

const sonkha = [...friends, 1253];
// console.log(sonkha);

const a = ['anonto', 'sakib', 'moushumi']
// console.log(a);

// console.log(...a);

const numbers = [3,4,5];
const allNumbers = [1,2,...numbers,6,7,8,9,10];
// console.log(allNumbers);

// objects 
// const obj1 = {a:1, b:4};
// const obj2 = {c:15, d:41};
// const combinedObj = {...obj1, ...obj2};
// console.log(merged); f
const obj1 = {a:1, b:4};
const obj2 = {b:15, d:41};
const merged = {...obj1, ...obj2};
console.log(merged);
