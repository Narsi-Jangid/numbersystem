const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  

  function isprime(num){
    if(num <= 1) return false;
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
   
 }
 return true;
  }

  let primeArray = [];

  for(let i =0; i<numbers.length;i++){
    if(isprime(numbers[i])){
        primeArray.push(numbers[i])
    }
  }

  console.log("prime number : ",primeArray);






// maximum and minimum and sums


let max = 0;
let min = 100000;
let sum = 0;

for(let i=0;i<=primeArray.length-1;i++){
    if(primeArray[i]>max){
        max = primeArray[i];
    }

    else if(primeArray[i]<min){
        min = primeArray[i];
    }

sum = sum + primeArray[i];
}


console.log("Maximum is : ",max);
console.log("Minimum is : ",min);
console.log("sum is : ",sum);
