# Quick Sort Application

This is a simple web application that implements the QuickSort algorithm. Users can input a list of numbers, sort them using QuickSort, and view the sorted results dynamically.

## Features

- Input field for entering a list of numbers.
- Button to trigger the sorting process.
- Display area for showing the sorted results.

## Files

- `index.html`: The main HTML document containing the structure of the web page.
- `styles/style.css`: CSS styles for a modern and user-friendly interface.
- `scripts/app.js`: JavaScript code implementing the QuickSort algorithm and handling user interactions.

## QuickSort Algorithm

QuickSort is a **divide-and-conquer** algorithm that sorts an array by selecting a "pivot" element and partitioning the other elements into two sub-arrays: one with elements smaller than the pivot and the other with elements greater than the pivot. The process is recursively applied to the sub-arrays, and the results are combined to form the sorted array.

### Steps:
1. Choose a pivot element (commonly the last element).
2. Partition the array into two sub-arrays:
   - Left sub-array: Elements smaller than the pivot.
   - Right sub-array: Elements greater than the pivot.
3. Recursively apply QuickSort to the sub-arrays.
4. Combine the sorted sub-arrays and the pivot.

### Example:
Input: `[8, 3, 1, 7, 0, 10, 2]`  
Output: `[0, 1, 2, 3, 7, 8, 10]`

### Complexity:
- **Best/Average Case**: O(n log n)
- **Worst Case**: O(n²) (occurs when the pivot divides the array into highly unbalanced partitions)
- **Space Complexity**: O(log n) (due to recursion stack)

## Comparison with Merge Sort and Bubble Sort

| Algorithm      | Best Case    | Average Case | Worst Case   | Space Complexity |
|----------------|--------------|--------------|--------------|------------------|
| **QuickSort**  | O(n log n)   | O(n log n)   | O(n²)        | O(log n)         |
| **Merge Sort** | O(n log n)   | O(n log n)   | O(n log n)   | O(n)             |
| **Bubble Sort**| O(n)         | O(n²)        | O(n²)        | O(1)             |

### Key Points:
- **QuickSort** is faster on average but can degrade to O(n²) in the worst case.
- **Merge Sort** guarantees O(n log n) performance but requires additional memory for merging.
- **Bubble Sort** is simple but inefficient for large datasets due to its O(n²) average and worst-case complexity.

## Usage

1. Open `index.html` in a web browser.
2. Enter a list of numbers separated by commas in the input field.
3. Click the "Sort" button to sort the numbers.
4. The sorted numbers will be displayed below the button.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License

This project is open-source and available under the MIT License.