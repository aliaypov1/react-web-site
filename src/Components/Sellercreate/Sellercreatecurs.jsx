
import React, { useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';

const Sellercreatecurs = () => {
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        companyName: "",
        companyDescription: "",
        email: ""
    })
    const postCurs = async()=>{
        const res = await axios.post('http://frez773-001-site1.atempurl.com/api/SellerApplication/create-seller-application',{...value},{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        console.log(res)
    }
    return (
        <div>
            <Header/>
            <input type="text" placeholder='firstName' onChange={e => setValue({...value, firstName:e.target.value})} />
            <input type="text" placeholder='lastName' onChange={e => setValue({...value, lastName:e.target.value})}/>
            <input type="number" placeholder='phone' onChange={e => setValue({...value, phone:e.target.value})} />
            <input type="text" placeholder='companyName' onChange={e => setValue({...value, companyName:e.target.value})} />
            <input type="text" placeholder='companyDescription'onChange={e => setValue({...value, companyDescription:e.target.value})} />
            <input type="email" placeholder='email' onChange={e => setValue({...value, email:e.target.value})} />
            <button onClick={postCurs}>post</button>
        </div>
    );
};

export default Sellercreatecurs;