import React, { useState } from 'react';
import style from './Heade.module.css'
import { Link } from 'react-router-dom';
import { accessToken, parsedRoles } from '../Token/Token';
import HeaderNavigate from './HeaderNavigate';
import { UserOutlined } from '@ant-design/icons';
import Message from '../UI/Modals/Message';
const Header = ({props}) => {

  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('seller')
    localStorage.removeItem('role')
    localStorage.removeItem('student')
    window.location.href = 'http://localhost:3000/'
  }
  
  return (
    <header className={style.header}>
      <div className={style.container}>

        {accessToken ? (<>
          <nav>

            {/* <a href='http://localhost:3000/About'  className={style.header__logo}>Home</a> */}
            <Link to='/' className={style.header__link}>О нас</Link>
            <Link to='/Course' className={style.header__link}><Message props='вы перешли на страницу курсов' Children='курсы'></Message></Link>
            <a href="#" className={style.header__link}>Контакты</a>
            {parsedRoles.includes('Manager') ?
            <Link to='/DashBoard' className={style.header__link}><Message props='Добро пожаловать продавец' Children='Заявки на продавца'/></Link>
        :
        ''
          }
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