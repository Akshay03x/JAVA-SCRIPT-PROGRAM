import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addmember=()=>{
    const [data,setData]=useState({});
    const navigate=useNavigate();
    const url="https://630ce2de53a833c53437ab57.mockapi.io/faculties";
    fetch(url).then(res=>res.json()).then(res=>setData(res));  
    return (<>
        <input type="text" placeholder="facultyName"  onchange={(e)=>{
            setData({...data,facultyName:e.target.value});
        }}/>{<br/>}
        <input type="text"  placeholder="facultyImage" onchange={(e)=>{
            setData({...data,facultyImage:e.target.value})
        }}/>{<br/>}
        <input type="text" placeholder="FacultyDiscription" onchange={(e)=>{
            setData({...data,FacultyDiscription:e.target.value});
            }}/>{<br/>}

        <button onClick={()=>{
            fetch(url,{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json" }}).then(navigate('/Api')).then();
        }}>ADD</button>
        {data.facultyName}
    </>);
}   
export default Addmember;