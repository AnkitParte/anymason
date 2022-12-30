//divide and conquer
let arr = [1000,-100,100,24,38,0,1];
let n = arr.length;

mergeS(arr,0,n-1)
console.log(arr.join(" "));

function mergeS(arr,low,high){
    if(low<high){
        let mid = low + Math.floor((high-low)/2);
        mergeS(arr,low,mid);
        mergeS(arr,mid+1,high);
        mergerFunc(arr,low,mid,high);
    }
}
function mergerFunc(arr,low,mid,high){
    let mergeArr = new Array(high-low+1).fill(0);
    let x=0;
    let idx1 = low;
    let idx2 = mid+1;
    while(idx1<=mid && idx2<=high){
        if(arr[idx1]<=arr[idx2]){
            mergeArr[x++] = arr[idx1++]
        }else{
            mergeArr[x++] = arr[idx2++]
        }
    }
    while(idx1<=mid){
        mergeArr[x++] = arr[idx1++]
    }
    while(idx2<=high){
        mergeArr[x++] = arr[idx2++]
    }
    for(let i=0,j=low;i<mergeArr.length;i++,j++){
        arr[j] = mergeArr[i];
    }
}
