import { useEffect, useState } from "react";

const Api=()=>{
    const [data,setData]=useState([]);
        useEffect(()=>{
            fetch("https://bible-api.com/john%203:16")
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                setData(res);
                console.log(res);
            })
        },[]);

        return<h1>{data.reference}</h1>;
}
export default Api;