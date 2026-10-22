// create the fibonnaci with the nth term of starr end = nth
// what the fibonnace number is that  current value = prewies + preprewise 
/// ex. like that 0,1,1,2,3,5,8,13,21 like that 
function fibonnace(n){
    sum = 0;
    fibo = [];
    prew = 1;
    pprew = 0;
    for(i=1;i<=n;i++){
        sum = prew + pprew;  //1,2,3,5,8,13
         fibo.push(sum);
         pprew = prew; 
         prew = sum;  
       
    }
    return sum;
}
//   Find the fibonnace is number with the nth term 
let nthterm = function(n){

    f6 = fibonnace(n-1) + fibonnace(n-2);  // f6 = f5 + f4
    return f6;
}
console.log(fibonnace(8));  