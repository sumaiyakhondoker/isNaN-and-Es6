const lengthMeter = (names)=>{
    let evenLengths = [];
    for(const name of names){
        if(name.length % 2 === 0){
            evenLengths.push(name);
        }
       
    }
    return evenLengths;
}
const array = ['sanjida', 'tayeba', 'rijvi', 'binte', 'bristy','nafi','raiyana', 'kulsum'];
const friends = lengthMeter(array);
console.log(friends);