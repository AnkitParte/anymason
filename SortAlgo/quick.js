//pivot and partition
let arr = [45,22,23,9,34,0,-1];
let n = arr.length;

quickS(arr,0,n-1);
console.log(arr.join(" "));
function quickS(arr,low,high){
    if(low<high){
        let idx = partition(arr,low,high);

        quickS(arr,low,idx-1);
        quickS(arr,idx+1,high);
    }
}

function partition(arr,low,high){
    let pivot = arr[high];
    let i = low-1;
    for(let j=low;j<=high;j++){
        if(arr[j]<pivot){
            i++;

            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    i++;
    let temp = arr[i];
    arr[i] = pivot;
    arr[high] = temp;
    return i;
}