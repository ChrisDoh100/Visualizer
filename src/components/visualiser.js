import React, { useState } from "react";
import './visualiser.css';

function Visualiser() {
    const [array,setArray] = useState([])
    const ArrayGenerator=()=>(
        setArray(Array.from({ length: 220 }, () => Math.floor(Math.random() *525)))
    )
    const BubbleSort=(array)=>{
      for (var k=0; k< array.length;k++){
        for (let i=0;i< array.length-k-1;i++){
            setTimeout(()=>{
            if (array[i]>array[i+1]){
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1]=temp
                setArray([...array])
            }
            },800)
        }setTimeout(()=>{
        },50)
    }}
    const SelectionSort = (arr)=>{
            for (let i = 0; i < arr.length - 1; i++) {
              setTimeout(()=>{
              let minPos = i;
              for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minPos]) {
                  minPos = j;
                  setArray([...arr])
                }
              }
              if (i !== minPos) {
                [arr[i], arr[minPos]] = [arr[minPos], arr[i]];
                setArray([...arr])
              }},100)
            }
          }
    const  InsertionSort=(inputArr)=>{
            let n = inputArr.length;
                for (let i = 1; i < n; i++) {
                    setTimeout(()=>{
                    // Choosing the first element in our unsorted subarray
                    let current = inputArr[i];
                    // The last element of our sorted subarray
                    let j = i-1;
                    while ((j > -1) && (current < inputArr[j])) {
                        inputArr[j+1] = inputArr[j];
                        setArray([...inputArr])
                        j--;
                    }
                    inputArr[j+1] = current;
                    setArray([...inputArr])
                },800)
                }
        }
        
    const QuickSort = (array,low,high)=>{
        if (low < high) {
            /* pi is partitioning index,
            arr[pi] is now at right place */
            let pi = partition(array, low, high);
            // Recursively sort elements
            // before partition and after
            // partition
            setTimeout(()=>{
            QuickSort(array, low, pi - 1)
            },50)
            setTimeout(()=>{
            QuickSort(array, pi + 1, high)
            },50)
        }
        function partition(array, low, high)
        {  
            let temp;
            let pivot = array[high];
       
            // index of smaller element
            let i = (low - 1);
            for (let j = low; j <= high - 1; j++) {
    
                if (array[j] <= pivot) {
                    i++;
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    console.log(array)
                    setArray([...array])
                }
            }
            temp = array[i + 1];
            array[i + 1] = array[high];
            array[high] = temp;

            return i + 1;
        }}
    return (
        <><div className="value-container">
            {array.map((value, idx) => <div className="values" key={idx} style={{
                height: `${value}px`,
            }}></div>
            )}</div><div><button onClick={()=>ArrayGenerator()}>Generate An Array</button>
                <button onClick={()=>BubbleSort(array)}>bubbleSort</button>
                <button onClick={()=>QuickSort(array,0,array.length-1)}>Quick Sort</button>
                <button onClick={()=>SelectionSort(array)}>SelectionSort</button>
                <button onClick={()=>InsertionSort(array)}>InsertionSort</button></div></>

    )}



export default Visualiser;