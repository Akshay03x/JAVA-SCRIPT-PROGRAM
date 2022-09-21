import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";

const LapTopDetail=()=>{
    const parms=useParams();
    const [data,setData]=useState({});
    const navigate=useNavigate();
    const url="https://630ce2de53a833c53437ab57.mockapi.io/LapTop";
    useEffect(()=>{
        fetch("https://630ce2de53a833c53437ab57.mockapi.io/LapTop/"+parms.id)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res);
        })
    },[]);
    return (<>
    <div className="row d-flex justify-content-center ">
            <div class="card row mb-3 col-md-6 ">

            <div className="row">
            <div className="col-md-6">
                <img src={data.LaptopImage} class="card-img-top" alt="..."/>
            <div class="card-body">
                {/* <h5 class="card-title">{data.lapTopName}</h5> */}
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <div className="row p-2">
                <button className="col-md-4 m-2 btn btn-danger" onClick={()=>{
                    fetch(url+"/"+parms.id,{method:"DELETE"}).then(()=>{
                        navigate('/LapTop');
                    })
                }}> Delete</button>
                <button className="col-md-4 m-2 btn btn-primary" onClick={()=>{
                    navigate('/addLapTop/'+parms.id);
                }}>edit</button>
            </div>
            </div>
                <div className="col-md-6 mt-5">
                    <h1>{data.lapTopName}</h1>
                    <h4 className="mt-4">&#x20b9;{data.LapTopPrice}</h4>
                    <h4 className="mt-4">Extended Warranty</h4>
                    <h6 >Extended protection for your device beyond the manufacturer warranty with coverage against all manufacturing defects.</h6>
                    <h4 className="mt-4">Detail:</h4>
                    
                    {/* <h5>Apple MacBook Air 2020 ({data.lapTopName}, {data.size}, 8GB, 256GB, macOS Big Sur, Space Grey)</h5> */}
                    <table className="table table-bordered ">
                        <tr>
                            <td className="fw-bold">RAM</td>
                            <td class="fst-italic">{data.LaptopRAM}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold">LaptopHD</td>
                            <td class="fst-italic">{data.LaptopHD}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold">Processor</td>
                            <td class="fst-italic">{data.LaptopProcessor}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold">GraphicsCard</td>
                            <td class="fst-italic">{data.LaptopGraphicsCard}</td>
                        </tr>
                    </table>
                    {/* <h6>RAM:&nbsp;{data.LaptopRAM}<br/> LaptopHD:&nbsp;{data.LaptopHD}<br/>Processor:&nbsp;{data.LaptopProcessor}<br/>GraphicsCard:&nbsp;{data.LaptopGraphicsCard}<br/></h6> */}
                </div>
            </div>
            
            </div>
            </div>  
            

            
        </>);
}
export default LapTopDetail;