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
                <div class="card  col-3 mb-3  ">
                    <img class="card-img-top" src={m.LaptopImage}  onClick={()=>{
                    navigate('/LapTopDetail'+'/'+m.id);
                }}/>
                <div class="card-body"  onClick={()=>{
                    navigate('/LapTopDetail'+'/'+m.id);
                }}>
                    <h5 class="card-title">{m.lapTopName}</h5>
                    <h5 class="card-title">{m.LaptopGraphicsCard}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            <div className="row">
                <button className="btn btn-success col-md-3" onClick={()=>{navigate('/addLapTop/'+m.id)}}>EDIT</button>
                <button className="btn btn-danger col-md-3" onClick={()=>{
                    fetch(url+'/'+m.id,{method:'DELETE'})
                    .then(()=>setData(data.filter((e)=>{return e.id!==m.id})))}}>
                        Delete</button>
            </div>
            </div>
            </>)
    })
    return(<>
            <button className="btn btn-info" onClick={()=>{
                navigate('/addLaptop');
            }}>ADD NEW</button>
        <div class="row">{main}</div>
    </>)
}
export default Laptop;