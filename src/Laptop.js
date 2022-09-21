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
                <div class="card  col-3  row-md-5 mb-3  p-2   d-flex justify-content-center " onclick={()=>{navigate('/LapTopDetail/'+m.id);}}>
                <h2 class="card-title d-flex justify-content-center fw-bolder mb-4"><i class="fa fa-apple mt-1"/>&nbsp;{m.lapTopName}</h2>
                <h4 className="d-flex justify-content-center"> STARTS &nbsp;AT&nbsp; &#x20b9; {m.LapTopPrice}</h4>
                    <img class="card-img-top" src={m.LaptopImage}  onClick={()=>{navigate('/LapTopDetail/'+m.id);}}/>
                <div class="card-body"  onClick={()=>{
                    navigate('/LapTopDetail/'+m.id);
                }}>
                </div>
            <div className="row d-flex  justify-content-start ">
                <button className="btn btn-success col-md-3  ms-3" onClick={()=>{navigate('/addLapTop/'+m.id)}}>EDIT</button>
                <button className="btn btn-danger col-md-3 ms-3 " onClick={()=>{
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
            <h6 className="text-danger">for more detail click on Photo!!!</h6>
        <div class="row  ">{main}</div>
    </>)
}
export default Laptop;