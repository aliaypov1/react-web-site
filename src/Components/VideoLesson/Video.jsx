import React from 'react';
import Loader from '../UI/Loader/Loader';
import VideoCourse from './VideoCourse';
import { Link } from 'react-router-dom';

const Video = ({size,loading}) => {
    if(loading)return <div className="container"><Loader/></div> 
    return (
        <div className='container'>
            {
               size.length > 0 ? size.map((item, i)=>(
                    <div className="" style={{background:'white',padding:'10px'}}>
                        <Link to={`/Test/${item.id}`}>Тесты</Link>
                        <VideoCourse id={item.id}/>
                    </div>
                ))
                :
                <p style={{fontSize:'44px',textAlign:'center',margin:"80px 0"}}>Нечего не найденно</p>
            }
        </div>
    );
};

export default Video;