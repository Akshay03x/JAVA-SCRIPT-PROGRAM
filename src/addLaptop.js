import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddLaptop=()=>{
    const url='https://630ce2de53a833c53437ab57.mockapi.io/LapTop';
    const [data,setData]=useState({});
    const navigate=useNavigate();
    const parms=useParams();
    useEffect(()=>{
        if(parms.id>0){
            fetch(url+'/'+parms.id).then(res=>res.json()).then(res=>setData(res));
        }
        if(!parms.id>0){
            setData({});
        }
        
    },[parms.id])

    return(<>
        <input type="text" placeholder="lapTopName" value={data.lapTopName} onChange={(e)=>{setData({...data,lapTopName:e.target.value})}}/>{<br/>}
        <input type="text"  placeholder="LaptopImage"value={data.LaptopImage}  onChange={(e)=>{setData({...data,LaptopImage:e.target.value})}}/>{<br/>}
        <input type="text" placeholder="LaptopRAM" value={data.LaptopRAM} onChange={(e)=>{setData({...data,LaptopRAM:e.target.value})}} />{<br/>}
        <input type="text" placeholder="LaptopHD"value={data.LaptopHD}  onChange={(e)=>{setData({...data,LaptopHD:e.target.value})}}/>{<br/>}
        <input type="text" placeholder="LaptopProcessor" value={data.LaptopProcessor}  onChange={(e)=>{setData({...data,LaptopProcessor:e.target.value})}}/>{<br/>}
        <input type="text"  placeholder="LaptopGraphicsCard" value={data.LaptopGraphicsCard} onChange={(e)=>{setData({...data,LaptopGraphicsCard:e.target.value})}}/>{<br/>}
        <button onClick={()=>{
            if(parms.id>0){
                fetch(url+"/"+parms.id,{method:"PUT",body:JSON.stringify(data),headers:{"Content-Type":"application/json" }}).then(()=>navigate('/LapTop'));
            }
            if(!parms.id>0){
                fetch(url,{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json" }}).then(()=>navigate('/Laptop'));
            }
        }}>{parms.id>0&&'ADIT'}
        {!parms.id>0&&'ADD'}</button>
    </>)
}
export default AddLaptop;