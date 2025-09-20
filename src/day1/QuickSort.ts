function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return; // Base case: If the sub-array has 0 or 1 element, it's already sorted
    }

    const pivotIdx = partition(arr, lo, hi); // Partition the array

    qs(arr, lo, pivotIdx - 1); // Recursively sort left part
    qs(arr, pivotIdx + 1, hi); // Recursively sort right part
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi]; // Choose the last element as pivot

    let idx = lo - 1; // Pointer for the smaller element

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            // If current element is smaller than or equal to pivot
            idx++; // Increment the pointer
            // Swap arr[i] and arr[idx]
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    // move the pivot to its correct position which is idx + 1 or next to the left side sroted elements which are less than or equal to pivot
    idx++; // Place the pivot in the correct position
    // Swap arr[hi] (pivot) and arr[idx]
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx; // Return the pivot's final position
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
