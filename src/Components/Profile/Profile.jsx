import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import Header from '../Header/Header';
import style from './Profile.module.css'
import ProfileNavigate from '../Header/ProfileHeader';


const Profile = () => {
    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(false)
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
   

    return (
        <div className="">
            <Header />
            <ProfileNavigate/>
            <div className={style.container}>
                {loading ? <div className="loader"></div> : profile && (
                    <div className={style.content}>
                        <a className={style.img}><img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" width='10px' alt=""   /></a>
                        
                        <p> {profile.userName}</p>
                        <p> {profile.email}</p>
                        <p> {profile.roles}</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Profile;