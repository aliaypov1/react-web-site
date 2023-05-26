import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import Header from '../Header/Header';
import style from './Profile.module.css'
import ProfileNavigate from '../Header/ProfileHeader';
import profileImg from '../img/profile.jpg'
import ProfileUpDate from './ProfileUpDate';


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
            <img src={profileImg} style={{height:'200px',width:'100%'}} alt="" />
            <div className={style.container}>
                
                    <div className={style.content}>
                    {loading ? <div className="loader"></div> : profile && (
                        <div className="">
                        <p style={{color:'black',fontSize:'50px',marginBottom:'40px'}}> {profile.userName}</p>
                        {/* <button style={{background:'#85233E',color:'white',padding:'20px 40px',borderRadius:'7px'}}>Редактировать профиль</button> */}
                        <ProfileUpDate/>
                        <p style={{color:"black",fontSize:'20px',marginTop:'30px'}}>Hi! We are Humans, we are building the future of work. We are trying to reinvent the way to <br /> discover jobs in web3. In a few weeks, we will launch a whole new way of referring great people <br /> to great jobs. For humans, by Humans. Launching on June, 15.</p>
                        <p style={{color:"black",fontSize:'20px',marginTop:'30px'}}>Сфера деятельности: UX/UI  дизайн, Графический дизайн</p>
                        <p style={{color:"black",fontSize:'20px',marginTop:'30px'}}>Город: Бишкек</p>
                        <p style={{color:"black",fontSize:'20px',marginTop:'30px'}}>Образование: Высшее экономическое, UX/UI дизайнер курсы</p>
                        </div>
                    
                )}
                </div>
            </div>

        </div>
    );
};

export default Profile;