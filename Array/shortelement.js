let a = [4,9,2,9,1],b = a[0];
for(let i=1;i<a.length;i++){
     if(b > a[i]){
        b = a[i];
     }

}
console.log(b);