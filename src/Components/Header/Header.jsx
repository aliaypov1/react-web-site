import React, { useState } from 'react';
import style from './Heade.module.css'
import { Link } from 'react-router-dom';
import { accessToken } from '../Token/Token';
import HeaderNavigate from './HeaderNavigate';
import { UserOutlined } from '@ant-design/icons';
const Header = ({props}) => {

  const logout = () => {
    localStorage.removeItem('accessToken')
    window.location.href = 'http://localhost:3000/'
    
    localStorage.removeItem('Seller')
  }
  
  return (
    <header className={style.header}>
      <div className={style.container}>

        {accessToken ? (<>
          <nav>

            <a href='http://localhost:3000/About'  className={style.header__logo}>Home</a>
            <Link to='/' className={style.header__link}>О нас</Link>
            <Link to='/Course' className={style.header__link}>Курсы</Link>
            <a href="#" className={style.header__link}>Контакты</a>
            <Link to='/DashBoard' className={style.header__link}>Заявки на продавца</Link>

          </nav>
          <nav>{props}</nav>
          <nav>
         
            <HeaderNavigate children={<UserOutlined />} />
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