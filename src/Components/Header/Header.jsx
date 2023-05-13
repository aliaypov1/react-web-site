import React, { useState } from 'react';
import style from './Heade.module.css'
import { Link } from 'react-router-dom';
import { accessToken } from '../Token/Token';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
const Header = () => {

  const logout = () => {
    localStorage.removeItem('accessToken')
    window.location.href = 'http://localhost:3000/Login'
  }
  return (
    <header className={style.header}>
      <div className={style.container}>

        {accessToken ? (<>
          <nav>

            <a href='http://localhost:3000/About' className={style.header__logo}>Home</a>
            <Link to='/' className={style.header__link}>О нас</Link>
            <a href="#" className={style.header__link}>Услуги</a>
            <a href="#" className={style.header__link}>Контакты</a>


          </nav>
          <nav>
            <Link to='/Profile' >
              <Badge count={`99+`}>
                <Avatar shape="square" icon={<UserOutlined />} />
              </Badge>
            </Link>
            <a onClick={logout} className={style.header__link}>Выйти</a></nav>
        </>)
          :
          (<>
            <nav>
              <Link to='/' className={style.header__link}>О нас</Link>
            </nav>
            <nav>
              <Link to='/Register' className={style.header__link}>Register</Link>
              <Link to='/Login' className={style.header__link}>Login</Link>
            </nav>

          </>)}




      </div>
    </header>
  );
};

export default Header;