import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ChangeCourse = () => {
    const {id} = useParams()
    const [value, setValue] = useState({
        Title:'',
        Description:'',
        IsFree:true,
        Price:0
    })
    const upData = async()=>{
        const resp = await axios.put(`http://frez773-001-site1.atempurl.com/api/Course/courses/${id}?Title=${value.Title}&Description=${value.Description}&IsFree=${value.IsFree}&Price=${value.Price}`,{},{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        console.log(resp)
    }
    return (
        <div>
            <Form>
                <Input onChange={e => setValue({...value, Title:e.target.value})}/>
                <Input onChange={e => setValue({...value, Description:e.target.value})}/>
                <Input onChange={e => setValue({...value, Price:e.target.value})}/>
                <Button onClick={upData}>click</Button>
            </Form>
        </div>
    );
};

export default ChangeCourse;