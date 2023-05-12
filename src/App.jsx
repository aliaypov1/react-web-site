import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom'
import LoginForm from './Components/Forms/LoginForm';
import RegisterForm from './Components/Forms/RegisterForm';
import Login from './Components/PostService/Login';
import Register from './Components/PostService/Register';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
import ChangeCurrentPassword from './Components/PostService/ChangeCurrentPassword';
import ForgotPassword from './Components/PostService/ForgotPassword';
import NotFondPage from './Components/NotFoundPage/NotFondPage';
import AppRouter from './Components/AppRouter/AppRouter';
import { Header } from 'antd/es/layout/layout';


const App = () => {
 
  return (
    <div>
       <AppRouter/>
    </div>
  );
};

export default App;