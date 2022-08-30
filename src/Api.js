import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Api=()=>{
    const [data,setData]=useState([]);
    const navigate = useNavigate();
        useEffect(()=>{
            fetch("https://630ce2de53a833c53437ab57.mockapi.io/faculties")
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                setData(res);
                console.log(res);
            })
        },[]);
        const formated=data.map((fac)=>{
            return (
                <>
                <div class="card col-md-3" onClick={()=>{
                    navigate('/ApiDetail/'+fac.id);
                }}>
                        <img src={fac.facultyImage} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        </div>
                </>
            );
        });

        return <div className="row">{formated}</div>
}
export default Api;