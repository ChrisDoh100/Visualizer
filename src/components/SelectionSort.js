
const arrayy = Array.from({ length: 200 }, () => Math.floor(Math.random() *550))
const SelectionSort = (inputArr)=>{
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j;
                console.log(inputArr)
            }
         }
         if (min !== i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;
        }
    }
}

SelectionSort(arrayy)