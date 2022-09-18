import { useState } from "react";
const ContactForm=()=>{
    const [value,setvalue]=useState({name:"abc ",password:"abc"});
    const [data,setData]=useState({});
    // let formeted=value.map((e)=>{
    //     return<li>{e.name}</li>;
    // })
    return (
        <>
            <div class="row g-3 align-items-center">
            <div class="col-auto">
                <input type="text"  class="form-control" placeholder="name " onChange={(e)=>{
                    setData({...data,name:e.target.value});
                    console.log(e);
                }}/>
                <input type="password"  class="form-control" placeholder="password"  onChange={(e)=>{
                    setData({...data,password:e.target.value});
                    console.log(e);
                }}/>
            </div>
        </div>

        <div class="row">
            <div className="col-3">
                <button onClick={(e)=>{
                    setvalue([...value,data])
                    e.preventDefault();
                }}>submit</button>
            </div>
        </div>
        <ul>
            <li><h1>{data.name}</h1></li>
        </ul>
        </>

    );
}
export default ContactForm;