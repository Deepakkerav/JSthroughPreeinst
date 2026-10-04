
// // using the for loop  cheak prime of not 
//   const cheak = (prime) => {
// for(let i=2;i<prime;i++){
//     if(prime%i==0){
//         return "Notprime";
//     }
// }
//    return "prime";
//   }
//   console.log(cheak(7));
//   console.log(9%3);

  // basic Recursion in js
//    function cheak(prime){     // when that method is cheak(8)in cheak(7) in cheak(6) in cheak(5) in cheak(4 ) so on .. 
//      let n = prime;
//     if(prime%n==0){           // when that prime numbrer is cheanged that how will possiable to cheak number 
//         return 1;
//     }
//     if(n > 1){
//         return cheak(prime-1);
//     }
        
//   }

// function cheak(n,i){
//     if(n < 2){
//         return false
//     }
//     if(n==i){
//         return true;
//     }
//     if(n%i==0){
//         return false;
//     }
//     return cheak(n,i+1);
// }
// console.log(cheak(23,2));


 // c . Cheak prime number in give range in there
  let  a=[];

  function cheak(i,j){
     for(i;i<=j;i++){
        let count = 0;
           for(k=2;k<i&&count==0;k++)
            {
            if(i%k==0)
            {
            count++;// count = count + 1;
            }
           }
          if(count==0){
              a.push(i);
          }
     }
  }
    const prime =  (i,j)=>{
        cheak(i,j);
        return a;
    }
// console.log(cheak(4,10),a);
 console.log(prime(4,10));