Here is a TypeScript console application that performs a binary search both recursively and iteratively:

```typescript
class BinarySearch {
    recursiveSearch(arr: number[], x: number, start: number, end: number): number {
        if (start > end) return -1;

        let mid: number = Math.floor((start + end) / 2);

        if (arr[mid] === x) return mid;

        if (arr[mid] > x) return this.recursiveSearch(arr, x, start, mid - 1);

        return this.recursiveSearch(arr, x, mid + 1, end);
    }

    iterativeSearch(arr: number[], x: number): number {
        let start: number = 0, end: number = arr.length - 1;

        while (start <= end) {
            let mid: number = Math.floor((start + end) / 2);

            if (arr[mid] === x) return mid;

            if (arr[mid] < x) start = mid + 1;
            else end = mid - 1;
        }

        return -1;
    }
}

let arr: number[] = [2, 3, 4, 10, 40];
let x: number = 10;
let binarySearch = new BinarySearch();

console.log("Recursive Binary Search: Element found at index " + binarySearch.recursiveSearch(arr, x, 0, arr.length - 1));
console.log("Iterative Binary Search: Element found at index " + binarySearch.iterativeSearch(arr, x));
```

This application defines a class `BinarySearch` with two methods: `recursiveSearch` and `iterativeSearch`. The `recursiveSearch` method performs a binary search recursively, and the `iterativeSearch` method performs a binary search iteratively. Both methods return the index of the element if it is found in the array, and -1 if it is not found. The application then creates an instance of the `BinarySearch` class and uses it to search for an element in an array both recursively and iteratively. The results are printed to the console.