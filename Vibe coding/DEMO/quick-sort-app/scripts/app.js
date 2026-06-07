function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('numberInput');
    const sortButton = document.getElementById('sortButton');
    const resultDisplay = document.getElementById('result');
    const beforeSortDisplay = document.getElementById('beforeSortDisplay');

    sortButton.addEventListener('click', () => {
        const input = inputField.value.trim();

        // Validate input: only numbers separated by commas
        if (!/^\d+(\s*,\s*\d+)*$/.test(input)) {
            resultDisplay.textContent = "Error: Please enter only numbers separated by commas.";
            beforeSortDisplay.textContent = "";
            return;
        }

        // Convert input to an array of numbers
        const numberArray = input.split(',').map(num => parseFloat(num.trim()));

        // Display the array before sorting
        beforeSortDisplay.textContent = `${numberArray.join(', ')}`;

        // Sort the array using QuickSort
        const sortedArray = quickSort(numberArray);

        // Display the sorted array
        resultDisplay.textContent = `${sortedArray.join(', ')}`;
    });
});