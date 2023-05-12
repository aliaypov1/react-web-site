import React, { useState } from 'react';

import ChangeCurrentPasswordForm from '../Forms/ChangeCurrentPasswordForm';
import axios from 'axios';
import { BASE_URL } from '../BASE_URL/BASE_URL';
const ChangeCurrentPassword = ({open,close}) => {
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
    if(!open) return null
    return (
        <>
            <ChangeCurrentPasswordForm value={value} setValue={setValue} update={updatePassword} close={close} />
            
        </>
    );
};

export default ChangeCurrentPassword;