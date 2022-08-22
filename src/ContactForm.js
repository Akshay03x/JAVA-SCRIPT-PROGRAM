import { useState } from "react";
const ContactForm=()=>{
    let [value,setvalue]=useState("old");
    return (
        <>
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label class="col-form-label" >NAME:</label>
                </div>
            <div class="col-auto">
                <input type="text"  class="form-control" onChange={(e)=>{
                    setvalue(e.target.value);
                    console.log(e);
                }}/>
            </div>
        </div>

        <div class="row">
            <div className="col-3">
                <button >submit</button>
            </div>
        </div>
        <ul>
            <li><h1>{value}</h1></li>
        </ul>
        </>

    );
}
export default ContactForm;