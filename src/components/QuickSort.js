
const arrayy = Array.from({ length: 55 }, () => Math.floor(Math.random() *550))
const QuickSort = (arr,low,high)=>{
    if (low < high) {
        /* pi is partitioning index,
        arr[pi] is now at right place */
        let pi = partition(arr, low, high);
        // Recursively sort elements
        // before partition and after
        // partition
        QuickSort(arr, low, pi - 1);
        QuickSort(arr, pi + 1, high);
    }
    function partition(arr, low, high)
    {
        let temp;
        let pivot = arr[high];
   
        // index of smaller element
        let i = (low - 1);
        for (let j = low; j <= high - 1; j++) {
   
            // If current element is
            // smaller than or
            // equal to pivot
            if (arr[j] <= pivot) {
                i++;
   
                // swap arr[i] and arr[j]
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
   
        // swap arr[i+1] and arr[high]
        // (or pivot)
        temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        console.log(arr)
   
        return i + 1;
    }
}

QuickSort(arrayy,0,arrayy.length-1)

