import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import CoursePages from '../Pages/CoursePages';
const { Meta } = Card;

const CourseDetails = () => {
    const [result, setResult] = useState([])
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        const getData = async()=>{
            const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Course/courses/${id}/students`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(resp)
            setResult(resp.data)
        }
        getData()
    },[])
    
    return (
        <div>
            <Header/>
            
            <Card title="Студенты этого Курса" style={{padding:'80px',margin:'50px'}}>
             
           {result.length > 0 ?
           result.map((item)=>  
        <Card key={item.id}
           style={{
             width: 300,
             marginTop: 16,
           }}
         >
             <Meta
             avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.studentId}`} />}
             title={item.userName}
             description={<Link to={`/ProfileSearch/${item.id}/${item.studentId}/${item.userName}`}>Профиль</Link>}
           />
         </Card>
           
         
           )
         :
         <p>нечего не найденно</p>}
          <CoursePages/>
         </Card>
        </div>
    );
};

export default CourseDetails;