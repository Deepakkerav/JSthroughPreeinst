// Pallindrom number is a number is equal a reverse number , ex - 121 = reverse(121) that are pallindrom number 
let rev = 0;
var isPalindrome = function(x) {
    let num = x;
     num = Math.abs(num);
    
    while(num!=0){
        rev = rev*10 + (num%10);
        num = (num/10).toFixed(0);
    }
    if(x === rev){
        return true;
    }
    else{
        return false;
    }
};
console.log(isPalindrome(-121));
console.log(rev);