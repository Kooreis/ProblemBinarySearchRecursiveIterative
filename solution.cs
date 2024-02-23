Here is a JavaScript solution for performing a binary search both recursively and iteratively:

```javascript
function binarySearchIterative(arr, x) {
    let start=0, end=arr.length-1;
    while (start<=end){
        let mid=Math.floor((start + end)/2);
        if (arr[mid]===x) return true;
        else if (arr[mid] < x) start = mid + 1;
        else end = mid - 1;
    }
    return false;
}

function binarySearchRecursive(arr, x, start, end) {
    if (start > end) return false;
    let mid=Math.floor((start + end)/2);
    if (arr[mid]===x) return true;
    if(arr[mid] > x) return binarySearchRecursive(arr, x, start, mid-1);
    else return binarySearchRecursive(arr, x, mid+1, end);
}

let arr = [2, 3, 4, 10, 40];
let x = 10;

console.log(binarySearchIterative(arr, x));
console.log(binarySearchRecursive(arr, x, 0, arr.length-1));
```

In this code, `binarySearchIterative` function performs binary search iteratively and `binarySearchRecursive` function performs binary search recursively. Both functions return `true` if the element is found in the array, `false` otherwise.