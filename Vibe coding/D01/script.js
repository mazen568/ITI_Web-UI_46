// Quick Sort implementation
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are already sorted
    }

    const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    const left = []; // Elements less than the pivot
    const right = []; // Elements greater than the pivot

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort left and right arrays, then concatenate with pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Function to handle user input and display the sorted result
function sortArray() {
    const input = document.getElementById("arrayInput").value;
    const array = input.split(",").map(num=>Number(num)); // Convert input string to an array of numbers
    if (array.some(isNaN)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }
    const sortedArray = quickSort(array);
    document.getElementById("result").textContent = "Sorted Array: " + sortedArray.join(", ");
}