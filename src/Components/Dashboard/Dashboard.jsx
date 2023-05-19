import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import style from './DashBoard.module.css'
import { Link } from 'react-router-dom';
import Approve from '../Sellercreate/Approve';
import Reject from '../Sellercreate/Reject';

const Dashboard = () => {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    
    
       
    useEffect(()=>{
        const getData = async()=>{
            const res = await  axios(`http://frez773-001-site1.atempurl.com/api/SellerApplication/get-all-applications`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(res.data)
            setResult(res.data)
            console.log(result)
        }
        getData()
    },[])
    const sort = () => {

        return (

            <>
                <ul>
                    {


                        result
                            .sort((a, b) => a.status > b.status ? 1 : -1)


                    }
                </ul>
            </>
        )

    }
    
    return (
        <div>
            <Header/>
            <div className="container" style={{background:'black',padding:'20px',marginTop:'80px',borderRadius:'16px',maxWidth:'1400px'}}>
            <button style={{background:'black', color:'white', padding:'20px',margin:'20px'}}
                onClick={()=>{
                    setLoading(true)
                    sort()
                    setTimeout(() => { setLoading(false) }, 1000)
                  }}>не просмотреные</button>
                  {loading ? <p>Loading...</p> : (
                     
                
                        result.map((item)=>
                        <div key={item.id} style={{}} className={style.container}>
                            <p>{item.id}</p>
                          <p>{item.companyName}</p>
                          <Link to={`/Details/${item.id}`}>more</Link>
                          {item.status === 0 ? <p>не просмотренно</p> : item.status === 1 ? <p style={{background:'red',borderRadius:"5px",display:'flex',justifyContent:'center',alignItems:'center'}}>отказано</p> :<p  style={{background:'green',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:"5px"}}>принято</p>  }
                        </div>
                        )
                    
                  )}
           </div>
        </div>
    );
};

export default Dashboard;