import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import style from './DashBoard.module.css'
import { Link } from 'react-router-dom';

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

    return (
        <div>
            <Header/>
            {
                result.map((item)=>
                <div key={item.id} style={{color:'black'}} className={style.container}>
                    <p>{item.id}</p>
                  <p>{item.firstName}</p>
                  <p>{item.lastName}</p>
                  <p>{item.phone}</p>
                  <Link to={`/Details/${item.firstName}/${item.id}`}>Details</Link>
                </div>
                )
            }
        </div>
    );
};

export default Dashboard;