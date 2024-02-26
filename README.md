# Question: How do you perform a binary search recursively and iteratively? JavaScript Summary

The JavaScript code provided defines two functions, binarySearchIterative and binarySearchRecursive, which perform a binary search on an array for a specified value. The binarySearchIterative function uses a while loop to iteratively search the array. It starts by defining the start and end indices of the array, then enters a loop where it calculates the middle index and checks if the value at this index matches the target value. If it does, the function returns true. If the target value is greater than the value at the middle index, the start index is moved to the middle index plus one. If the target value is less, the end index is moved to the middle index minus one. The loop continues until the start index is greater than the end index, at which point the function returns false, indicating the target value is not in the array. The binarySearchRecursive function works similarly, but instead of a loop, it uses recursion. If the target value is not at the middle index, the function calls itself with a new start or end index, depending on whether the target value is greater or less than the value at the middle index. If the start index is ever greater than the end index, the function returns false. Both functions are then tested with an array and a target value.

---

# TypeScript Differences

The TypeScript version of the solution is similar to the JavaScript version in terms of logic and structure. Both versions implement binary search both iteratively and recursively. However, there are a few key differences:

1. TypeScript uses static typing: In the TypeScript version, types are assigned to variables and function return values. For example, `arr: number[]`, `x: number`, `start: number`, `end: number`, and the function return type `: number`. This is a feature of TypeScript that is not present in JavaScript. It helps to catch errors during compile time and makes the code more predictable and easier to understand.

2. Use of classes: The TypeScript version uses a class `BinarySearch` to encapsulate the binary search methods. This is a feature of TypeScript and ES6 JavaScript. The JavaScript version, on the other hand, uses standalone functions.

3. Different return values: In the JavaScript version, the functions return `true` if the element is found and `false` if it is not. In the TypeScript version, the functions return the index of the element if it is found and `-1` if it is not. This provides more information about where the element was found in the array.

4. Use of `this`: In the TypeScript version, `this` keyword is used to call the recursive function within the class. This is not used in the JavaScript version as the functions are not part of a class.

5. Instantiation: In the TypeScript version, an instance of the `BinarySearch` class is created to call the methods. This is not required in the JavaScript version as the functions are not part of a class.

---

# C++ Differences

The C++ version of the solution solves the problem in a similar way to the JavaScript version. Both versions use the same binary search algorithm, which involves repeatedly dividing the search space in half until the target value is found or the search space is empty.

However, there are some differences in the language features and methods used in the two versions:

1. Data Types: In JavaScript, arrays can hold any type of data. In C++, a `std::vector<int>` is used, which can only hold integers.

2. Return Values: The JavaScript version returns a boolean value (`true` or `false`) to indicate whether the target value is found. The C++ version returns the index of the target value if it is found, or `-1` if it is not found.

3. Output: The JavaScript version uses `console.log` to print the result to the console. The C++ version uses `std::cout` to print the result to the console.

4. Calculation of Midpoint: In JavaScript, the midpoint is calculated using `Math.floor((start + end)/2)`. In C++, the midpoint is calculated using `l + (r - l) / 2`. This is done to avoid overflow in C++.

5. Sorting: The C++ version explicitly sorts the array before performing the binary search. The JavaScript version assumes that the input array is already sorted.

6. Function Parameters: In the JavaScript version, the start and end indices are passed as parameters to the recursive function. In the C++ version, the start and end indices are also passed as parameters to the recursive function, but the array is passed by reference to avoid copying the entire array for each recursive call.

---
