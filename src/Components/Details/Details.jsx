import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import style from './Details.module.css'
import { Card } from 'antd';
import Approve from '../Sellercreate/Approve';
import Reject from '../Sellercreate/Reject';
const Details = () => {
    const params = useParams()
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };



    useEffect(() => {
        let id = params.id - 1
        const getData = async () => {
            const res = await axios(`http://frez773-001-site1.atempurl.com/api/SellerApplication/get-all-applications`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then((res) => { setResult(res.data[id]); console.log(res.data[id]) })

        }
        getData()
    }, [])
    return (
        <>
            <Header />
            <div className={style.container}>
                <div style={{ color: "#000" }} className={style.modal}>
                    {result ? <>
                        <Card title="Card Title">
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