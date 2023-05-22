
import React, { useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import { Button, Form, Input } from 'antd';

const Sellercreatecurs = () => {
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        companyName: "",
        companyDescription: "",
        email: ""
    })
    const postCurs = async()=>{
        const res = await axios.post('http://frez773-001-site1.atempurl.com/api/SellerApplication/create-seller-application',{...value},{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        console.log(res)
    }
    return (
        <div>
            <Header/>
            <Form className='container' style={{padding:'120px'}}>
            <Input type="text" placeholder='firstName' onChange={e => setValue({...value, firstName:e.target.value})} />
            <Input type="text" placeholder='lastName' onChange={e => setValue({...value, lastName:e.target.value})}/>
            <Input type="number" placeholder='phone' onChange={e => setValue({...value, phone:e.target.value})} />
            <Input type="text" placeholder='companyName' onChange={e => setValue({...value, companyName:e.target.value})} />
            <Input type="text" placeholder='companyDescription'onChange={e => setValue({...value, companyDescription:e.target.value})} />
            <Input type="email" placeholder='email' onChange={e => setValue({...value, email:e.target.value})} />
            <Button onClick={postCurs}>post</Button>
            </Form>
            
        </div>
    );
};

export default Sellercreatecurs;