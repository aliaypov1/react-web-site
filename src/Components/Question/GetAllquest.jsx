import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GetAllquest = ({id}) => {
    const [result, setResult] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Question/get-all-questions-by id?testId=${id}`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setResult(resp.data)
            
        }
        getData()
    },[])
    return (
        <div>
            {
                result.length > 0 ? result.map((item)=> (
                    <Card title={item.text} style={{marginTop:'40px'}} key={item.id}>
                        <Link to={`/AddAnswer/${item.id}`}>Дать Ответ</Link>
                    </Card>
                ))
                :
                <p>Заданий нет</p>
            }
        </div>
    );
};

export default GetAllquest;