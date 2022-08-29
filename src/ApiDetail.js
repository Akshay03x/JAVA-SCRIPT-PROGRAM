import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ApiDetail=()=>{
    const parms=useParams();
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://630ce2de53a833c53437ab57.mockapi.io/faculties/"+parms.id)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res);
        })
    },[]);
    return (<>
            <h6>{data.id}</h6>
            <h1>{data.facultyName}</h1>
            <img src={data.facultyImage}/>
            <h1>{data.facultyMobailNumber}</h1>
        </>);
}
export default ApiDetail;