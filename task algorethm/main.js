let arr = [1,3,2,6,4,5];


// ================================================
// =============  Insertion Sort  =================
// ================================================
function insrtionSort(){
    for(let x = 0; x < arr.length;x++){
    let key = arr[x];
    let y= x-1;
    
    while(y >= 0 && arr[y] > key){
        arr[y+1] = arr[y];
        y--;
    }
    arr[y + 1] = key
}
return arr
}

console.log("Sorting By InsertionSort : ",insrtionSort(arr))










// ================================================
// =============  Merge Sort  =====================
// ================================================
function mergeSort(arr) {
    const m = arr.length / 2

    if(arr.length < 2){
        return arr 
    }
    
    const left = arr.splice(0, m)
    return merge(mergeSort(left),mergeSort(arr))
}

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}

console.log("Sorting By MergeSort : ",mergeSort(arr));




