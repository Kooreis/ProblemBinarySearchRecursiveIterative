```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int binarySearchIterative(std::vector<int>& arr, int x) {
    int l = 0;
    int r = arr.size() - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == x)
            return m;
        if (arr[m] < x)
            l = m + 1;
        else
            r = m - 1;
    }
    return -1;
}

int binarySearchRecursive(std::vector<int>& arr, int l, int r, int x) {
    if (r >= l) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            return binarySearchRecursive(arr, l, mid - 1, x);
        return binarySearchRecursive(arr, mid + 1, r, x);
    }
    return -1;
}

int main() {
    std::vector<int> arr = {2, 3, 4, 10, 40};
    int x = 10;
    std::sort(arr.begin(), arr.end());
    int resultIterative = binarySearchIterative(arr, x);
    int resultRecursive = binarySearchRecursive(arr, 0, arr.size() - 1, x);
    (resultIterative == -1) ? std::cout << "Element is not present in array\n"
                             : std::cout << "Element is present at index " << resultIterative << "\n";
    (resultRecursive == -1) ? std::cout << "Element is not present in array\n"
                             : std::cout << "Element is present at index " << resultRecursive << "\n";
    return 0;
}
```