import React, { useState } from 'react';
import style from './Heade.module.css'
import { Link } from 'react-router-dom';
const Header = () => {
  
  const logout =()=>{
    localStorage.removeItem('accessToken')
    window.location.href='http://localhost:3000/Login'
  }
    return (
        <header className={style.header}>
            <div className={style.container}>
            <nav>

                <a href='http://localhost:3000/About' className={style.header__logo}>UNIPAGE</a>
                <a href="#" className={style.header__link}>О нас</a>
                <a href="#" className={style.header__link}>Услуги</a>
                <a href="#" className={style.header__link}>Контакты</a>
               
                
            </nav>
            <nav>
              <Link to='/Profile' className={style.header__link}>Профиль</Link>
              <a onClick={logout} className={style.header__link}>Выйти</a>
            </nav>
            
            </div>
        </header>
    );
};

export default Header;