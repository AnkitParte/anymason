
let arr = [12,-8,5,2,7,1];
let n = arr.length;
for(let i=0;i<n;i++){
    let sm = i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[sm]){
            sm=j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[sm];
    arr[sm] = temp; 
}
console.log(arr.join(" "));