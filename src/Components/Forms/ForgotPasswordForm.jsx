import React from 'react';
import { Button, Form, Input } from 'antd';

const ForgotPasswordForm = ({value,setValue,forgotPassword}) => {
    return (
        <div>
            <Input type="email" placeholder='recipientEmail' onChange={e => setValue({...value, recipientEmail:e.target.value})} />
            <Button style={{color:'black'}} onClick={forgotPassword}>отправить пароль на почту</Button>
        </div>
    );
};

export default ForgotPasswordForm;