import { Card, Skeleton } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Buy from '../Forms/Buy';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import RemoveFavorites from './RemoveFavorites';

const GetAllFavorites = () => {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        const getData = async()=>{
            try{
                setLoading(true)
            const resp = await axios('http://frez773-001-site1.atempurl.com/api/Student/GetFavourites',{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setResult(resp.data)
            setLoading(false)
        }catch(err){
            console.log(err.response.message)
            setLoading(false)
        }
        }
        getData()
    },[])
    return (
        <div>
            <Header/>
            <ProfileNavigate/>
            {loading ?
                 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr ', }}>
                 <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                 <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                 <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                 <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                 <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                 <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                 </div>
                    :
                    
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr ', gap: '20px' }}>
                 { result.length > 0 ? result.map((item) =>
                    (

                        <>
                            <Card key={item.id} title={'Заголовок : ' + item.title} style={{ marginBottom: '18px', width: "400px", boxShadow: ' -1px -1px 5px 0px rgba(0,0,0,0.75)' }} extra={<RemoveFavorites id={item.id}/>}>
                                <p style={{ textAlign: 'right', margin: '8px', }}><Link to={`/Course/${item.id}`} style={{ color: "blue" }}>Более</Link> </p>
                                <Card type="inner" title={'Описание : ' + item.description} extra=''>
                                    <div className="" style={{ background: '#85233E', width: '100%', height: '100%', borderRadius: '3px', color: "white", textAlign: 'center', fontSize: "20px" }}> { <Buy name={item.title} id={item.id} children={item.isFree ? 'Бесплатно' : 'купить за ' + item.price + 'сом'} />}</div>
                                </Card>
                            </Card>
                        </>

                    )
                    )
                :
                <p style={{textAlign:"center",fontSize:'40px',margin:"60px 0"}}>Нечего не найденно</p>}
    </div>
                }
        </div>
    );
};

export default GetAllFavorites;