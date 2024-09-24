let arr = [2,3,6,4,5,7,9,5,8,9,7,5];
let arr1 = [];
let n = arr.length
let j = 1;
while(j <= arr.length){
    let i = 0;
     while(i < n - j){   
        c = 0;
        k = i;
        while(c < j){
            arr1[c] = arr[k];
            c++;
            k++;
        }
        console.log(arr1);
        i++; 
    }
   j++;
 }