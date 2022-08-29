import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Api=()=>{
    const [data,setData]=useState([]);
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
                <Link to={'/ApiDetail/'+fac.id} >
                    <h6>{fac.facultyName}</h6>
                </Link>);
        })

        return <h1>{formated}</h1>
}
export default Api;