import { useState } from "react";
const Counter=()=>{
    const [Count,SetCount]=useState(0);
    return(
        <>
            <button onClick={()=>{
                // Count++;
                SetCount(Count+1);
            }}>Update</button>
            <button onClick={()=>{
                SetCount(0);
            }}> Clear</button>
            <h1>{Count}</h1>
        </>
    ); 
}
export default Counter;
