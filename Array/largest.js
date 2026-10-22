let arr = new Array(10);
 arr = [38,83,8,0,34,34,98,84];
 let small = big = arr[0];

 let largest = function(arr){
    for(i=1;i < arr.length;i++){
        if(arr[i] > big){
            big = arr[i];
        }
        if(arr[i] < small){
            small = arr[i];
        }
    }
 }
 // seconde  smallest element of array 
 let b,a=arr[0]; 
 for(i=1;i<arr.length;i++){  // 8,23,7,4,87,28 
    if(a > arr[i]){
        b = a; // 8 7 
        a =  arr[i]; // 7 4
    }
 }
 console.log(b,a);
 A