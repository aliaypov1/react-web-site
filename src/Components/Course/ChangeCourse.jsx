import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCarousel from '../Profile/ProfileCarousel';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import UploadImageForm from './UploadFile';

const ChangeCourse = () => {
    const {id} = useParams()
    const [value, setValue] = useState({
        Title:'',
        Description:'',
        IsFree:true,
        Price:0
    })
    console.log(value)
    const upData = async()=>{
        const resp = await axios.put(`http://frez773-001-site1.atempurl.com/api/Course/courses/${id}?Title=${value.Title}&Description=${value.Description}&IsFree=${value.IsFree}&Price=${value.Price}`,{},{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        console.log(resp)
    }
    const handleClick = () => {
        setValue(prevState => ({
          ...prevState,
          IsFree: !prevState.IsFree
        }));
      };
    return (
        <div className=''>
            <Header/>
            <ProfileNavigate/>
            <Form style={{padding:'70px',borderRadius:'5px',}}>
                <Input placeholder='Title' style={{marginBottom:'20px'}} onChange={e => setValue({...value, Title:e.target.value})}/>
                <Input placeholder='Description' style={{marginBottom:'20px'}} onChange={e => setValue({...value, Description:e.target.value})}/>
               {value.IsFree ? <p></p> :  <Input placeholder='price' style={{marginBottom:'20px'}} onChange={e => setValue({...value, Price:e.target.value})}/>}
                <Button onClick={upData}>обновить курс</Button>
                <Button onClick={handleClick}>{
                    value.IsFree ? <p>Бесплатно</p>:<p>платно</p>
                }</Button>
                <UploadImageForm/>
            <ProfileCarousel courseId={id}/>
            </Form>
        </div>
    );
};

export default ChangeCourse;
