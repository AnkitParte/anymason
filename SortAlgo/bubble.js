
let arr = [-13,12,-1,5,4,2,0];
let n = arr.length;

for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr.join(" "));