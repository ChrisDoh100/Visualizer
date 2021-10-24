import React, { useState } from "react";
import './visualiser.css';


function Visualiser() {
    const [array,setArray] = useState([])
    const ArrayGenerator=()=>(
        setArray(Array.from({ length: 160 }, () => Math.floor(Math.random() *550)))
    )
    return (
        <div className = "value-container">
        {array.map((value,idx) => 
        <div className = "values" key = {idx}style={{backgroundColor:"red", height: `${value}px`,
                                            }}></div>
        )}<button onClick = {ArrayGenerator}>Rest The Array</button><button onClick={0}>SortArray</button></div>

    )}



export default Visualiser;