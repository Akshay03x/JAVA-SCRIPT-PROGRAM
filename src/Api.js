import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Api=()=>{
    const parms=useParams();
    const [data,setData]=useState([]);
    const navigate = useNavigate();
    const url="https://630ce2de53a833c53437ab57.mockapi.io/faculties";
        useEffect(()=>{
            fetch(url)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                setData(res);
                console.log(res);
            })
        },[data.faculties]);

        const formated=data.map((fac)=>{
            return (
                <>
                <div class="card col-md-3" onClick={()=>{
                    navigate('/ApiDetail/'+fac.id);
                }}>
                        <img src={fac.facultyImage} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h2>{fac.facultyName}</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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