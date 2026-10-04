// Sum of Digites is the way of input = 1234 , output = 10

 let sum = function(n){
    Sum = 0;
    while(n>0){
    Sum = Sum+(n%10);
    n = n/10;

}
return Sum;
}

// Reverse of number is  // infinity is numbermax value in there
 let r = 0;
 let reverse = function(n){
 while(n>0){
     sum = n%10;
     r = r*10 + sum;
     n = n/10;
 }
 return r;
}
console.log(reverse(1234));


