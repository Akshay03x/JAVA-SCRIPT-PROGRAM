import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditMember=()=>{
    const [data,setData]=useState({});
    const navigate=useNavigate();
    const parms=useParams();
    const url="https://630ce2de53a833c53437ab57.mockapi.io/faculties";
    useEffect(()=>{
        fetch(url+"/"+parms.id).then(res=>res.json()).then(res=>setData(res));  
    },[]);    

    return (<>
        <input type="text" value={data.facultyName}  onchange={(e)=>{
            setData({...data,facultyName:e.target.value});
        }}/>{<br/>}
        <input type="text"  placeholder="facultyImage" value={data.facultyImage} onchange={(e)=>{
            setData({...data,facultyImage:e.target.value})
        }}/>{<br/>}
        <input type="text" placeholder="FacultyDiscription" value={data.facultyDiscription} onchange={(e)=>{
            setData({...data,FacultyDiscription:e.target.value});
            }}/>{<br/>}

        <button onClick={()=>{
            fetch(url+"/"+parms.id,{method:"PUT",body:JSON.stringify(data),headers:{"Content-Type":"application/json" }}).then(navigate('/Api')).then();
        }}>edit</button>
    </>);
}
export default EditMember;