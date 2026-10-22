let arr = [9,8,7,6,1,2,3],between = Math.floor(arr.length/2);
for(i=0;i<arr.length;i++){

    if(i < between){  // floor = rounding down
        // Tht are assanding order
        for(let j=0;j<between;j++){
            if(arr[j] > arr[j+1]){ 
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; 
            
        }
        }
      console.log(i,arr);

    }
    else{
        // That are dasanding order 
        for( let j=between;j<arr.length-1;j++){
             if(arr[j] < arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
          
        }
        }
       console.log(i,arr)
    }
  
}
console.log(arr.length); // expected of 6,7,8,9,3,2kk