import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetAllAnswer = ({id}) => {
    const [result, setResult] = useState([])
    useEffect(()=>{
        const getAnswer =async()=>{
            const resp =await axios(`http://frez773-001-site1.atempurl.com/api/Answer/get-all-answers-by id?questionId=${id}`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setResult(resp.data)
        }
        getAnswer()
    },[])
    return (
        <div>
            {
               result.length > 0 ? result.map((item)=>(
                    <Card style={{marginTop:'40px'}} key={item.id} title='Ответ : '>
                        {item.text}
                    </Card>
                ))
                :
                <p>Ответов нет</p>
            }
        </div>
    );
};

export default GetAllAnswer;