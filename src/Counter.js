import { useState } from "react";
const Counter=()=>{
    // let [Count,SetCount]=useState(0);
    const [Count,SetCount]=useState(0);
    return(
        <>
            <button onClick={()=>{
                // Count++;
                SetCount(Count+1);
            }}>Update</button>
            <h1>{Count}</h1>
        </>
    ); 
}
export default Counter;