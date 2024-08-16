const getMaxNum = (arr1, arr2)=>{
const newArr = [...arr1, ...arr2];
const max = Math.max(...newArr)
return max;
}

const maxNumber = getMaxNum([2,53,68,41,23], [75,25,36,14,76,756]);
console.log(maxNumber);