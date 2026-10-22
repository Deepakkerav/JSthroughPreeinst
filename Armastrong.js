function number(x) {
    let num = Math.abs(x); //  that value is return of absolute value 
    let count = 0;

    do {
        num = Math.floor(num / 10);  // that value is return of that rouds down ex. 9.92 so 9
        count++;
    } while (num !== 0);

    return count;
}

function Armstrong(x) {
    const digits = number(x);
    let sum = 0;
    let temp = Math.abs(x);

    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, digits); // a. 9 b. 134 c. 135 
        temp = Math.floor(temp / 10);
    }
   if(sum == x){
    return true;
   }
   else{
    return false;
   }
}

console.log(number(153));
console.log(Armstrong(153));
// Armstrong number is given rangee
function rang(a,b){
    arm = [];
     if(a<=b){
        for(a;a<=b;a++){
           if(Armstrong(a)){
             arm.push(a);
           }
        }
     }
     return arm;

}

console.log(rang(334,454));