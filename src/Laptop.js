import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Laptop=()=>{
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    const url='https://630ce2de53a833c53437ab57.mockapi.io/LapTop';
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(res=>setData(res))
    },[])

    const main=data.map((m)=>{
        return (<>
                <div class="card  col-3 mb-3  " onClick={()=>{
                    navigate('/LapTopDetail')
                }}>
                    <img class="card-img-top" src={m.LaptopImage}/>
                <div class="card-body">
                    <h5 class="card-title">{m.lapTopName}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </>)
    })
    return(<>
            <button className="btn btn-primary" onClick={()=>{
                navigate('/addLaptop');
            }}>add</button>
        <div class="row">{main}</div>
    </>)
}
export default Laptop;