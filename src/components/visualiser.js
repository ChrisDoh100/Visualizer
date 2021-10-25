import React, { useState } from 'react';
import './visualiser.css';
import Button from 'react-bootstrap/Button';

function Visualiser() {
  const [array,setArray] = useState([]);
  const ArrayGenerator=() => (
    setArray(Array.from({ length: 200 }, () => Math.floor(Math.random() *470)))
  );
  const BubbleSort=(array) => {
    for (var k=0; k< array.length;k++){
      for (let i=0;i< array.length-k-1;i++){
        setTimeout(() => {
          if (array[i]>array[i+1]){
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1]=temp;
            setArray([...array]);
          }
        },800);
      }setTimeout(() => {
      },50);
    }};
  const SelectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      setTimeout(() => {
        let minPos = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minPos]) {
            minPos = j;
            setArray([...arr]);
          }
        }
        if (i !== minPos) {
          [arr[i], arr[minPos]] = [arr[minPos], arr[i]];
          setArray([...arr]);
        }},100);
    }
  };
  const  InsertionSort=(inputArr) => {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
      setTimeout(() => {
        let current = inputArr[i];
        let j = i-1;
        while ((j > -1) && (current < inputArr[j])) {
          inputArr[j+1] = inputArr[j];
          setArray([...inputArr]);
          j--;
        }
        inputArr[j+1] = current;
        setArray([...inputArr]);
      },800);
    }
  };
  const QuickSort = (array,low,high) => {
    if (low < high) {
      let pi = partition(array, low, high);
      setTimeout(() => {
        QuickSort(array, low, pi - 1);
      },50);
      setTimeout(() => {
        QuickSort(array, pi + 1, high);
      },50);
    }
    function partition(array, low, high)
    {
      let temp;
      let pivot = array[high];

      let i = (low - 1);
      for (let j = low; j <= high - 1; j++) {
        if (array[j] <= pivot) {
          i++;
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          setArray([...array]);
        }
      }
      temp = array[i + 1];
      array[i + 1] = array[high];
      array[high] = temp;

      return i + 1;
    }};
  return (
    <><div><h1>Array Sorting Visualiser</h1></div>
      <div className="container">
      {array.map((value, idx) => <div className="values" key={idx} style={{
        height: `${value}px`,
      }}></div>
      )}
        <Button className=" btn btn-cool-blues btn-rounded" onClick={() => ArrayGenerator()}>Generate An Array</Button>
        <Button className=" btn btn-cool-blues btn-rounded" onClick={() => BubbleSort(array)}>bubbleSort</Button>
        <Button className=" btn btn-cool-blues btn-rounded" onClick={() => QuickSort(array, 0, array.length - 1)}>Quick Sort</Button>
        <Button className=" btn btn-cool-blues btn-rounded" onClick={() => SelectionSort(array)}>SelectionSort</Button>
        <Button className=" btn btn-cool-blues btn-rounded" onClick={() => InsertionSort(array)}>InsertionSort</Button>
      </div></>

  );}



export default Visualiser;