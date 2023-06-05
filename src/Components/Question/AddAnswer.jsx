
import React, { useState } from 'react';
import ProfileNavigate from '../Header/ProfileHeader';
import Header from '../Header/Header';
import { Button, Input, message } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GetAllAnswer from './GetAllAnswer';

const AddAnswer = () => {
    const { id } = useParams()
    const [answer, setAnswer] = useState(
        {
            questionId: id,
            text: "",
            isCorrect: true
        }
    )
    const AddAnswer = async () => {
        try{
        const resp = await axios.post('http://frez773-001-site1.atempurl.com/api/Answer/Create-answer', {...answer}, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        message.success(resp.data.message)
    }catch(error){
        message.error(error.response.message)
    }
    }
    return (
        <div>
            <Header />
            <ProfileNavigate />
            <div className="container">
                <Input placeholder='Add answer' onChange={e => setAnswer({...answer, text:e.target.value})} />
                <Button onClick={AddAnswer}>Добавить</Button>
                <br />
                <br />
                <br />
                <br />
                <h1 style={{textAlign:'center',fontSize:'32px'}}>Ответы</h1>
                <GetAllAnswer id={id}/>
            </div>
        </div>
    );
};

export default AddAnswer;