import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";

const ApiDetail=()=>{
    const parms=useParams();
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    const url="https://630ce2de53a833c53437ab57.mockapi.io/faculties";
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
    <div className="row d-flex justify-content-center ">
            <div class="card mb-3 col-md-3 ">
                <img src={data.facultyImage} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{data.facultyName}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <div className="row">
                <button className="col-md-3" onClick={()=>{
                    fetch(url+"/"+parms.id,{method:"DELETE"}).then(res=>navigate("/Api"))
                }}> Delete</button>
                <button className="col-md-3" onClick={()=>{
                    navigate('/EditMember/'+parms.id);
                }}>edit</button>
            </div>
            </div>
            </div>
        </>);
}
export default ApiDetail;