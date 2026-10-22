function Fahrenheit_to_Celsius(start , end , step){
		
     /* Write your code here
    No need to specify return type 
    Input is already taken care of, you have to print the output statements accordingly */
  for (start; start < end; start += step){
    fh =Math.trunc((start - 32) * 5 / 9);
    console.log(`${start} ${fh}`);
  }
}
Fahrenheit_to_Celsius(18,156,32);