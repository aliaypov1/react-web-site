import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import RegisterForm from '../Forms/RegisterForm';
import Header from '../Header/Header';
import DangerAlert from '../UI/Alerts/DangerAlert';
import { message } from 'antd';

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)
    const [value,setValue] = useState({
        email:'',
        password:'',
        userName:''

    })
    const createUser = async()=>{
        try{
            setLoading(true)
        const res = await axios.post(`${BASE_URL}Register`,{...value})
        console.log(res.data)
        if(res.data.statusCode === 200){
            window.location.href ='http://localhost:3000/Login'
        }
        }catch(error){
            if (error)  {
                message.error(error.response.data.message)
            }
            setLoading(false)
        }
        setLoading(false)
        
    }
    return (
        <>
        <Header/>
        <DangerAlert open={alert}/>
           <RegisterForm value={value} setValue={setValue} createUser={createUser} loading={loading} /> 
        </>
    );
};

export default Register;