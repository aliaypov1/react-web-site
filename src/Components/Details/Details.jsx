import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import style from './Details.module.css'
import { Card } from 'antd';
import Approve from '../Sellercreate/Approve';
import Reject from '../Sellercreate/Reject';
const Details = () => {
    const {id} = useParams()
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };



    useEffect(() => {
        const getData = async () => {
            const res = await axios(`http://frez773-001-site1.atempurl.com/api/SellerApplication/seller-app/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(res)
            console.log(result)
            setResult(res.data)

        }
        getData()
    }, [])
    return (
        <>
            <Header />
            <div className={style.container}>
                <div style={{ color: "#000" }} className={style.modal}>
                    {result ? <>
                        <Card title={result.companyName}>
    <Link to='/DashBoard' style={gridStyle}>вернуться назад</Link>
    <Card.Grid style={gridStyle}>{result.id}</Card.Grid>
    <Card.Grid style={gridStyle}>{result.firstName}</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
    {result.lastName}
    </Card.Grid>
    <Card.Grid style={gridStyle}>{result.companyName}</Card.Grid>
    <Card.Grid style={gridStyle}>{result.companyDescription}</Card.Grid>
    <Card.Grid style={gridStyle}>{result.email ? result.email : <p>пусто</p>}</Card.Grid>
    <Card.Grid style={gridStyle}>{result.phone}</Card.Grid>

    <Card.Grid style={{display:'flex', columnGap:"20px"}}><Approve id={result.id}/> / <Reject id={result.id}/></Card.Grid>
  </Card>
                        
                        </> : "ниче нет"}

                </div>
            </div>
        </>
    );
};

export default Details;