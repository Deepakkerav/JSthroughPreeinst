const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter the number: ', (input) => {
    // that are 1 probleam 
      const a = Number(input)
      // const b = b;
      // a
    //   if(a >= 0 ){
    //     if(a==0){
    //       console.log("Zero");
    //     }
    //     else{
    //       console.log("Positieve");
    //     }
    //   }
    // else{
    //   console.log("Negative");
    // }
     
    // .b using a tarnay orperatore

  //  console.log((a>=0)?((a==0)?"zero":"positive"):"Negative")

  // probalem 2 . Even & odd 
  console.log((a%2==0)?"even":"odd");
   if(a % 2 == 0){
     console.log("Even");
   }
   else{
    console.log("odd");
   }
   // using Bitwise operatore
   console.log(((a&1)?"odd":"even"));
    

  







































  rl.close()
})
