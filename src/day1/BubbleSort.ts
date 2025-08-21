export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        // i is getting subtracted from the
        // j < arr.length - 1 (because it should not go outsided of the array)
        // j < arr.length - 1 - i (subtracting i to avoid unnecessary comparisons which is already sorted)
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] >= arr[j + 1]) {
                const tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }
}
