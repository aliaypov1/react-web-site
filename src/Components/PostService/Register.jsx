import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import RegisterForm from '../Forms/RegisterForm';

const Register = () => {
    const [value,setValue] = useState({
        email:'',
        password:'',
        userName:''

    })
    const createUser = async()=>{
        try{
        const res = await axios.post(`${BASE_URL}Register`,{...value})
        console.log(res.data)
        if(res.data.statusCode === 200){
            window.location.href ='http://localhost:3000/Login'
        }
        }catch(e){
            console.log(e)
        }
    }
    return (
        <>
           <RegisterForm value={value} setValue={setValue} createUser={createUser}/> 
        </>
    );
};

export default Register;