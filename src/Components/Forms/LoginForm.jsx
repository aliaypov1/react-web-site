import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import style from './Form.module.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const LoginForm = ({ inputValue, setInputValue, login, loading,props }) => {
  const [rememberMe, setRemamberMe] = useState(false)
  const [checked, setChecked] = useState(false);
  const [checkeds, setCheckeds] = useState(false);
  const [valid, setValid] = useState(false)
  function handleCheckboxChange(event) {
    setChecked(event.target.checked);
  }
  function handleCheckboxChangee(event) {
    setCheckeds(event.target.checked);
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
 
  return (
    <>
     
      <div className={style.container}>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{background:'white',padding:'70px',borderRadius:'5px',WebkitBoxShadow:'22px 29px 25px 4px rgba(34, 60, 80, 0.2)'}}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              style={{ width: '450px' }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              onChange={e => setInputValue({ ...inputValue, userName: e.target.value })}
              placeholder="Username" />

          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password placeholder="input password" style={{ width: '450px' }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              onChange={e => setInputValue({ ...inputValue, password: e.target.value })} />

          </Form.Item>
         
          <Form.Item>
            {loading ? <div className="loader"></div> : ''}
            <input
              style={{ marginRight: "10px" }}
              type="checkbox"
              checked={checkeds}
              onChange={handleCheckboxChangee}
              onClick={() => setValid(prev => !prev)}
              name='remember'
            />
            <label style={{ marginRight: '20px' }}>rememberMy</label>
            <input
              style={{ marginRight: "10px" }}
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
              onClick={() => setRemamberMe(prev => !prev)}
              name='valid'
            />
            <label>Я не робот</label>
            <br />
            {props}



          </Form.Item>

          <Form.Item>

            <Button disabled={!rememberMe} htmlType="submit" style={{ marginRight: '20px' }} onClick={() => login()}>
              Log in
            </Button>

            <Link to='/Register'>Or register now!</Link>
          </Form.Item>
        </Form>
        {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/3456/3456388.png" alt="" /></div> */}
      </div>
    </>
  );
};

export default LoginForm;