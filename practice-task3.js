// system 1 ------------
  const squareMachine = (numbers)=>{
    const arrayLength = numbers.length;
    let sum = 0;
   
    for(const num of numbers){
        const squareValue = num * num;
        sum = sum + squareValue;
        
        
    }
    const average = sum / arrayLength;
    return average;
}

const result = squareMachine([2,4,3,6]);
console.log(result);



// system 2 -------------------
// const calculateAvg = (numbers)=>{
//     let sum = 0;
//     const arrayLength = numbers.length;
//     for(const num of numbers){
//         const squareValue = Math.pow(num, 2);
//         sum = sum + squareValue;
//     }
//     const avg = sum / arrayLength;
//     return avg;
// }



// const average  = calculateAvg([2,4,3,6]);
// console.log(average); 