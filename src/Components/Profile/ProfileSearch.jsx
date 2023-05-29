import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { Avatar, Card } from 'antd';
import Item from 'antd/es/list/Item';
import Loader from '../UI/Loader/Loader';
const { Meta } = Card;

const ProfileSearch = () => {
    const { id } = useParams()
    const { studentId } = useParams()
    const [result, setResult] = useState([])
    const [response, serResponse] = useState([])
    const [loading, setLoading] = useState([])
    useEffect(() => {
        const getUser = async () => {
             setLoading(true)
            const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Auth/users/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(resp)
            setResult(resp.data)
            setLoading(false)
        }
        getUser()
    }, [])
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Course/students/${studentId}/courses`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(resp)
            serResponse(resp.data)
            setLoading(false)
        }
        getData()
    }, [])
    return (
        <div>
            <Header />
            <Card title="" style={{ padding: '80px', margin: '50px' }}>
                {result &&
                    <Card key={result.id}
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}
                    >
                        <Meta
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${result.id}`} />}
                            title={result.userName}
                            description={result.email}
                        />

                    </Card>

                }
                {loading ? <Loader/>:
                <>
                <h1 style={{margin:"40px", fontSize:'29px',color:'blue'}}>Курсы данного пользователя</h1>
                {
                    response.length > 0 ? response.map((item) =>

                        <Card key={item.id} title={item.title} style={{ marginBottom: '30px' }}>
                            <p style={{ textAlign: 'right', margin: '8px', }}></p>
                            <Card type="inner" title={item.description} >
                                <div className="" style={{ background: 'rgb(173, 215, 20)', width: '100%', height: '100%', borderRadius: '3px', color: "white", textAlign: 'center', fontSize: "20px" }}></div>
                            </Card>
                        </Card>
                    )
                        :
                        <p>пусто</p>
                }</>
                }
                    
            </Card>
        </div>
    );
};

export default ProfileSearch;