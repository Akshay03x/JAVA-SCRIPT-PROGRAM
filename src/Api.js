/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Api=()=>{
    // const parms=useParams();
    const [data,setData]=useState([]);
    const [flag ,setFlag]=useState(true);
    const navigate = useNavigate();
    const url="https://630ce2de53a833c53437ab57.mockapi.io/faculties";
        useEffect(()=>{
            fetch(url)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                setData(res);   
                setFlag(true);
            })
        },[setFlag]);

        const formated=data.map((fac)=>{
            return (
                <>
                {/* <h1>{data.status}</h1> */}
                <div class="card col-md-3 ">
                        <img src={fac.facultyImage} class="card-img-top" onClick={()=>{
                                navigate('/ApiDetail/'+fac.id)}} alt="..."/>
                        <div class="card-body" onClick={()=>{
                                navigate('/ApiDetail/'+fac.id);}}>
                            <h2>{fac.facultyName}</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button className="btn btn-success col-md-3 m-2" onClick={()=>navigate('/ApiDetail/'+fac.id)}> read </button>
                            <button className="btn btn-primary col-md-3 m-2" onClick={()=>navigate('/AddMember/'+fac.id)}> edit</button>
                            <button className="btn btn-danger col-md-3 m-2" onClick={
                                ()=>{ fetch(url+"/"+fac.id,{method:"DELETE"}).then(setFlag(false))}
                            }> DELETE</button>
                            
                        </div>
                </div>
                </>
            );
        });

        return (<>
        <div className="col-md-3"><button onClick={()=>{
            navigate('/AddMember')
        }}>Add Member</button></div>
        <div className="row">{formated}</div></>)
}
export default Api; 