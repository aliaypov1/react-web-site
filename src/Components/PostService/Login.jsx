import axios from 'axios';
import React, { useMemo, useState } from 'react';
import LoginForm from '../Forms/LoginForm';
import { BASE_URL } from '../BASE_URL/BASE_URL.js';
import DangerAlert from '../UI/Alerts/DangerAlert';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ErrorMessage from '../UI/Message/ErrorMessage';
import { message } from 'antd';

const Login = () => {
    const [inputValue, setInputValue] = useState({
        userName: '',
        password: ''
    })
    const [counter, setCounter] = useState(3)
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const login = async () => {
       
        try {
            setLoading(true)
            const res = await axios.post(`${BASE_URL}Login`, { ...inputValue })
            console.log(res.data)
            localStorage.setItem('accessToken',res.data.accessToken)
                getUser()
        } catch(error){
            if (error)  {
                message.error(error.response.data.message)
            }
            
        setLoading(false)
        }
        setLoading(false)
        
    }
    const getUser = async()=>{
        const res =await axios('http://frez773-001-site1.atempurl.com/api/Auth/GetCurrentUser',{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        console.log(res)
        localStorage.setItem('student',res.data.studentId)
        if(localStorage.getItem('accessToken') && localStorage.getItem('student')){
        window.location.href='http://localhost:3000/About'
        }
    }
    
   
    return (
        <>
        <Header/>
            <DangerAlert open={alert} />
            {/* {counter >= 3? <Link to='/ForgotPassword' style={{textAlign:'center',color:'red'}}>забыли пароль</Link>:''} */}
            <LoginForm inputValue={inputValue} setInputValue={setInputValue} login={login} loading={loading} props={<Link to='/ForgotPassword' style={{textAlign:'center',color:'black'}}>забыли пароль</Link>} />
        </>
    );
};

export default Login;