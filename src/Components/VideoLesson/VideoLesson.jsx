import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Video from './Video';
import VideoPagination from './VideoPagination';
import VideoPage from '../Pages/VideoPage';

const VideoLesson = () => {
    const [size, setSize] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [videoPerPage] = useState(1)
    const [loading,setLoading] = useState(false)
    const {id} = useParams()
    useEffect(()=>{
        const getPage = async()=>{
            setLoading(true)
            const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Page/course/${id}/pages`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(resp)
            setSize(resp.data)
            setLoading(false)
        }
        
        getPage()
    },[])
    const lastVideoIndex = currentPage + videoPerPage
    const firstVideoIndex = lastVideoIndex - videoPerPage
    const currentVideo = size.slice(firstVideoIndex, lastVideoIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <div>
            <h1 style={{textAlign:'center',fontSize:"32px",margin:'40px 0'}}>Видео уроки</h1>
            <Video size={size} loading={loading}/>
            {/* <VideoPagination 
            videoPerPage={videoPerPage}
            totalSize={size.length}
            paginate={paginate}
            /> */}
        </div>
    );
};

export default VideoLesson;