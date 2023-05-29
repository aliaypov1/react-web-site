
import { Avatar, Button, Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Carousel1 from '../UI/Carousel/Carousel';
import Loader from '../UI/Loader/Loader';
import SellerBuy from '../Forms/SellerBuy';
import Buy from '../Forms/Buy';
import VideoPage from '../Pages/VideoPage';
const { Meta } = Card;

const CourseDetails = () => {
    const [result, setResult] = useState([])
    const [title, setTitle] = useState([])
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
      const getCourse = async()=>{
        const res =await axios(`http://frez773-001-site1.atempurl.com/api/Course/course/${id}`,{
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        setTitle(res.data)
      }
      getCourse()
    },[])
    useEffect(()=>{
        const getData = async()=>{
          setLoading(true)
            const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Course/courses/${id}/students`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(resp)
            setResult(resp.data)
            setLoading(false)
        }
        getData()
    },[])
    
    return (
        <div>
            <Header/>
           
            {loading ?<div style={{textAlign:'center',marginTop:'90px'}}><Loader/></div> :
            <>
             <div className="" style={{padding:' 10px 62px'}}>
           <div className="" style={{width:'100%',height:'600px',background:'#85233E',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            {
              title && 
              <>
                <p style={{fontSize:'70px', color:'white',fontWeight:'900'}} key={title.id}>{title.title}</p> 
                
                </>
            }
            
           </div>
            </div>
            <div className="" style={{padding:'10px 62px'}}>
            <div className="" style={{width:'100%',height:'150px',background:'white',borderRadius:'20px',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
             <div>
              <li style={{fontSize:'25px',fontWeight:'700'}}>
                <p>Отзывы</p>
                <p>190</p>
                </li>
             </div>
             <div>
              <li style={{fontSize:'25px',fontWeight:'700'}}>
              <p>Стоимость</p>
              {
              title && 
              <>
                <p key={title.id}>{title.price} сом</p> 
                
                </>
            }
              </li>
             </div>
             <div>
              <li style={{fontSize:'25px',fontWeight:'700'}}>
                 <p>Рейтинг курса</p>
                 <p>9</p>
                  </li>
             </div>
             <div>
              <li style={{fontSize:'25px',fontWeight:'700'}}>
                <p>Студентов</p>
                <p>6</p>
              </li>
             </div>
            </div>
            </div>
             <Card title="Студенты этого Курса" style={{padding:'80px',margin:'50px'}}>
             <div className="" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
              
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
         </div>
          {/* <CoursePages/> */}
          <Carousel1/>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VmxVxCBHt_g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <VideoPage/>
         </Card> 
         </>}
           
        </div>
    );
};

export default CourseDetails;