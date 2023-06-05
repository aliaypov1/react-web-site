import { Card, message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import { Link } from 'react-router-dom';

const GetQuestion = ({id}) => {
    const [result, setResult] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            try{
            const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Question/get-all-questions-by id?testId=${id}`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            message.success(resp.data.message)
            setResult(resp.data)
        }catch(error){
            message.error(error.response.message)
        }
    }
    getData()
    },[])
    return (
        <>
        <Header/>
        <ProfileNavigate/>
        <div className='container'>
        {
                result.length > 0 ? result.map((item)=> (
                    <Card title={item.text} style={{marginTop:'40px'}} key={item.id}>
                        <Link>Дать ответ</Link>
                    </Card>
                ))
                :
                <p>Заданий нет</p>
            }
        </div>
        </>
    );
};

export default GetQuestion;