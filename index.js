const number = [ 3,7,2,15,9,20,5,14,12,1,8,11,6,19,4,10,17,13,16,18];


let res1 = '';
let res2 = '';
for(let i =0;i<=number.length-1;i++){
    if(number[i]%2==0){
        res1 = res1+number[i]+" ";
    }

    else if(number[i]%2!==0){
        res2= res2+number[i]+" ";
    }
   
}

console.log("Even number is :",res1);
console.log("Odd number is : ",res2);
