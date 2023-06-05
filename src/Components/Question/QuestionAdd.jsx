import Input from 'antd/es/input/Input';
import React, { useState } from 'react';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import { Button, message } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GetAllquest from './GetAllquest';

const QuestionAdd = () => {
    const{id} = useParams()
    const [question, setQuestion] = useState({
        text: "",
        testId: id
    })
    const addQuest =async()=>{
        try{
        const resp = await axios.post('http://frez773-001-site1.atempurl.com/api/Question/Create-question',{...question},{
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
        <div className=''>
            <Header />
            <ProfileNavigate />
            <div className="container">
                <Input onChange={e => setQuestion({...question, text:e.target.value})} placeholder='New question' />
                <Button onClick={addQuest}>Создать</Button>
                <GetAllquest id={id}/>
            </div>
        </div>
    );
};

export default QuestionAdd;