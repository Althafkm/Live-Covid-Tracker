import React, { useEffect, useState } from 'react' ;
import "./covid.css"

const Covid = () =>{
    const [datanew,setData]=useState([]);
    const getCovidData = async () =>{
    try{
       const res = await fetch('https://data.covid19india.org/data.json')
       const data=await res.json()
       console.log(data.statewise[0])
       console.log(data.statewise[0].recovered)
       setData(data.statewise[0])
       
        }
    catch(err){
        console.log(err)

        }
    }
    console.log(datanew.recovered)
    useEffect(()=>{
        getCovidData();
    },[])
    return (
        <div>
        <div className='container'>
           <div className="card" style={{width: "25rem"}}>
 
                <div className="card-body">
                    <h5 className="card-title">Our Country</h5>
                    <h1 className="card-text">INDIA</h1>
                </div>
                
            </div>
            <div className="card" style={{width: "25rem"}}>
 
                <div className="card-body">
                    <h5 className="card-title">Total Recoverd</h5>
                    <h1 className="card-text">{datanew.recovered}</h1>
                    <a href="https://www.worldometers.info/coronavirus/country/india" className="btn btn-primary" target="_blank">More Details..</a>
                </div>
                
            </div>
            <div className="card" style={{width: "25rem"}}>
 
                <div className="card-body">
                    <h5 className="card-title">Total Confirmed</h5>
                    <h1 className="card-text">{datanew.confirmed}</h1>
                    <a href="https://www.worldometers.info/coronavirus/country/india" className="btn btn-primary" target="_blank">More Details..</a>
                </div>
                
            </div>
        </div>
        <div className='container'>
           <div className="card" style={{width: "25rem"}}>
 
                <div className="card-body">
                    <h5 className="card-title">Total Death's</h5>
                    <h1 className="card-text">{datanew.deaths}</h1>
                    <a href="https://www.worldometers.info/coronavirus/country/india" className="btn btn-primary" target="_blank">More Details..</a>
                </div>
                
            </div>
            <div className="card" style={{width: "25rem"}}>
 
                <div className="card-body">
                    <h5 className="card-title">Total Active</h5>
                    <h1 className="card-text">{datanew.active}</h1>
                    <a href="https://www.worldometers.info/coronavirus/country/india" className="btn btn-primary" target="_blank">More Details..</a>
                </div>
                
            </div>
            <div className="card" style={{width: "25rem"}}>
 
                <div className="card-body">
                    <h5 className="card-title">Last Updated</h5>
                    <h1 className="card-text">{datanew.lastupdatedtime}</h1>
                </div>
                
            </div>
        </div>
        </div>
      );
    }
export default Covid