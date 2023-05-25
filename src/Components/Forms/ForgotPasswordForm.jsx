import React from 'react';
import { Button, Form, Input } from 'antd';
import style from './Form.module.css'
import Header from '../Header/Header';
const ForgotPasswordForm = ({value,setValue,forgotPassword}) => {
    return (
        <>
        <Header/>
        <div className={style.container}>
        <div style={{background:'white',padding:'70px',borderRadius:'5px',WebkitBoxShadow:'22px 29px 25px 4px rgba(34, 60, 80, 0.2)'}} >
            <Input style={{marginBottom:'20px'}} type="email" placeholder='recipientEmail' onChange={e => setValue({...value, recipientEmail:e.target.value})} />
            <Button style={{color:'black'}} onClick={forgotPassword}>отправить пароль на почту</Button>
        </div>
        </div>
        </>
    );
};

export default ForgotPasswordForm;