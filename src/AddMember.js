import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './index.css';
const Addmember=()=>{
    const [data,setData]=useState({});
    const navigate=useNavigate();
    const parms =useParams();
    const url="https://630ce2de53a833c53437ab57.mockapi.io/faculties";
    useEffect(()=>{
        if(parms.id>0){
            fetch(url+"/"+parms.id).then(res=>res.json()).then(res=>setData(res));
        }
        if(!parms.id>0){
            setData({});
        }
    },[]);    

        return (<>
            <input type="text" value={data.facultyName}  onChange={(e)=>{
                setData({...data,facultyName:e.target.value});
            }}/>{<br/>}
            <input type="text"  placeholder="facultyImage" value={data.facultyImage} onChange={(e)=>{
                setData({...data,facultyImage:e.target.value})
            }}/>{<br/>}
            <input type="text" placeholder="FacultyDiscription" value={data.FacultyDiscription} onChange={(e)=>{
                setData({...data,FacultyDiscription:e.target.value});
                }}/>{<br/>}

            <button onClick={()=>{
                if(parms.id>0){
                    fetch(url+"/"+parms.id,{method:"PUT",body:JSON.stringify(data),headers:{"Content-Type":"application/json" }}).then(()=>navigate('/Api'));
                }
                if(!parms.id>0){
                    fetch(url,{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json" }}).then(()=>navigate('/Api'));
                }
            }}>EDIT/ADD</button>
        </>);

    }
export default Addmember;