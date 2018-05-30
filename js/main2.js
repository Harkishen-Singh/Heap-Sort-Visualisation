var a = [ 9, 10, 2, 1, 5, 4, 3, 6, 8, 7, 13 ];

function heapify(arr, n, i){
    var largest = i ;
   var  l = 2 * i + 1     ;
   var r = 2 * i + 2     ;
 
    
    if (l < n && arr[i] < arr[l]){
        largest = l;
    }
    if (r < n && arr[largest] < arr[r]){
        largest = r;
    }

    if (largest != i){
        let temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp;
        heapify(arr, n, largest)}
 }

function heapSort(arr){
    n = arr.length;
 
    for(var i=n;i>=0;i--){
        heapify(arr, n, i);
    }
 
    
    for(var i=n-1;i>0;i--){
        let temp = arr[i];
        arr[i] = arr[0]
        arr[0] = temp
        heapify(arr, i, 0)}
        console.log(arr);
 }

arr = [ 12, 11, 13, 5, 6, 7]
heapSort(arr)
n = (arr).length
/*console.log("Sorted array is")
for(var i=0;i<n;i++)
    console.log(arr[i])*/