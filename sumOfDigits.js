// Sum of Digites is the way of input = 1234 , output = 10

 let sum = function(n){
    Sum = 0;
    while(n>0){
    Sum = Sum+(n%10);
    n = n/10;

}
return Sum;
}
console.log(sum(1234));

