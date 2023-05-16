import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import Item from 'antd/es/list/Item';
import Header from '../Header/Header';
import style from './Profile.module.css'
import UpdatePass from '../Forms/ChangeCurrentPasswordForm';
import ChangeCurrentPassword from '../PostService/ChangeCurrentPassword';
import { Link } from 'react-router-dom';


const Profile = () => {
    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const fetchData = async () => {


            try {
                setLoading(true)
                const res = await axios(`${BASE_URL}GetcurrentUser`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setProfile(res.data)
                console.log(res.data)
                console.log(profile)
            } catch (e) {
                setLoading(false)
            }
            setLoading(false)
        }
        fetchData()
    }, [])
    // useEffect (async()=>{
    //     const res = async()=>{
    //         const rest = await fetch('http://frez773-001-site1.atempurl.com/api/SellerApplication/get-all-applications',{
    //              headers: {
    //                     "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
    //                 }
    //         } )
    //         const data = await rest.json()
    //         console.log(data)
    //     }
    //     res()
    // },[])

    return (
        <div className="">
            <Header />
            <div className={style.container}>
                {loading ? <div className="loader"></div> : profile && (
                    <div className="">
                        <Link to='/CreateCursSeller'>длбавить свой курс</Link>
                        <p>имя пользоваьеля : {profile.userName}</p>
                        <p>учетная запись : {profile.email}</p>
                        <p>уровень : {profile.roles}</p>
                        <button style={{ color: 'blue' }} onClick={() => setOpen(true)}>Изменить пароль</button>
                    </div>

                )}


                <ChangeCurrentPassword open={open} close={() => setOpen(false)} />
            </div>

        </div>
    );
};

export default Profile;