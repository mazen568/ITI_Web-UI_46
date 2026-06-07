# QuickSort

## Explanation
Quick Sort is a divide-and-conquer algorithm that sorts an array by repeatedly partitioning it into smaller subarrays. Here's a step-by-step explanation:

1. **Choose a Pivot**:
   - Select an element from the array as the pivot. Common choices include the first, last, or middle element. In this implementation, the last element is chosen as the pivot.

2. **Partition the Array**:
   - Divide the array into two subarrays:
     - **Left subarray**: Contains elements smaller than the pivot.
     - **Right subarray**: Contains elements greater than or equal to the pivot.

3. **Recursively Sort the Subarrays**:
   - Apply the Quick Sort algorithm to the left and right subarrays.

4. **Combine the Results**:
   - Concatenate the sorted left subarray, the pivot, and the sorted right subarray to form the final sorted array.

5. **Base Case**:
   - If the array has 0 or 1 element, it is already sorted, so return it.

## How it works
- Picks a pivot.
- Splits the array into left (smaller) and right (bigger).
- Recursively sorts both sides.
- Combines the result.

---

## Comparison with Bubble Sort and Merge Sort

| Algorithm      | Best Case      | Average Case   | Worst Case     | Space Complexity |
|----------------|----------------|----------------|----------------|------------------|
| **Quick Sort** | `O(n log n)`   | `O(n log n)`   | `O(n^2)`       | `O(log n)`       |
| **Merge Sort** | `O(n log n)`   | `O(n log n)`   | `O(n log n)`   | `O(n)`           |
| **Bubble Sort**| `O(n)`         | `O(n^2)`       | `O(n^2)`       | `O(1)`           |

### Key Points:
1. **Quick Sort**:
   - Faster on average than Bubble Sort and comparable to Merge Sort.
   - Space-efficient compared to Merge Sort but can degrade to `O(n^2)` in the worst case.

2. **Merge Sort**:
   - Guarantees `O(n log n)` time complexity in all cases but requires additional space for temporary arrays.

3. **Bubble Sort**:
   - Inefficient for large datasets due to `O(n^2)` time complexity.
   - Simple and space-efficient but not practical for most real-world applications.