import React, { useState } from 'react';

import ChangeCurrentPasswordForm from '../Forms/ChangeCurrentPasswordForm';
import axios from 'axios';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import ProfileNavigate from '../Header/ProfileHeader';
import Header from '../Header/Header';
const ChangeCurrentPassword = () => {
    const [value, setValue] = useState({
        currentPassword: "",
        newPassword: ""
    })
    const updatePassword = async()=>{
        try{
            const res = await axios.post(`${BASE_URL}ChangeCurrentPassword`,{...value},{headers:{"Authorization": `Bearer ${localStorage.getItem('accessToken')}`}})
            console.log(res)
        }catch(e){
            console.log(e)
        }
       
    }
    
    return (
        <>
        <Header/>
        <ProfileNavigate/>
            <ChangeCurrentPasswordForm value={value} setValue={setValue} update={updatePassword}  />
            
        </>
    );
};

export default ChangeCurrentPassword;