import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProfileNavigate from '../Header/ProfileHeader';
import { Card, Skeleton } from 'antd';
import axios from 'axios';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import DeleteMyCourse from './DeleteMyCourse';
import { Link } from 'react-router-dom';

const MyCourse = () => {
    const [loading, setLoading] = useState(false);
    const [userID, setUserID] = useState([]);
    const [result, setResult] = useState([]);
    const [isFirstRequestComplete, setFirstRequestComplete] = useState(false);
    useEffect(() => {
      const getUser = async () => {
        setLoading(true);
        const resp = await axios(`${BASE_URL}GetcurrentUser`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        console.log(resp);
        setUserID(resp.data.studentId);
        console.log(userID);
        setLoading(false);
        setFirstRequestComplete(true);
      };
      getUser();
    }, []);
  
    useEffect(() => {
      const getData = async () => {
        if (!isFirstRequestComplete) {
          return;
        }
        setLoading(true)
        const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Course/students/${userID}/courses`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        console.log(resp);
        setResult(resp.data);
        console.log(result);
        setLoading(false)
      };
      getData();
    }, [isFirstRequestComplete, userID]);
  
    const handleCourseDeleted = (deletedCourseId) => {
        setResult(prevCourses => prevCourses.filter(result => result.id !== deletedCourseId));
      };
    return (
        <div>
            <Header />
            <ProfileNavigate />
            <div className="container" style={{ padding: '120px 0', color: 'black' }}>
                {loading ? <div className='container' style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px'}}>
                    <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                    <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                    <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                    <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                    <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                    <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                </div>
                    :
                    <div className='container' style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px'}}>
                 {  result.length > 0 ? result.map((item) =>
                    (
    
                        
                            <Card key={item.id} title={item.title} style={{ marginBottom: '30px', width:"400px" }}>
                                <Card type="inner" title={item.description} extra={<DeleteMyCourse onCourseDeleted={handleCourseDeleted} courseId={item.id}/>}>
                                    <div className="" style={{  width: '100%',background:'#85233E', height: '100%', borderRadius: '3px', color: "white", textAlign: 'center', fontSize: "18px" }}><Link to={`/VideoLesson/${item.id}`}>Смотреть</Link></div>
                                </Card>
                            </Card>
                       
                    )
                    )
                    :
                    <h1>У вас нету купленных курсов</h1>
                }
                    </div>
    
                }
                
                </div>
            </div>
    );
};

export default MyCourse;