import { Card, Form, Input, Modal, message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteVideoPage from './DeleteVideoPage';
import TextArea from 'antd/es/input/TextArea';

const CourseVideoPage = ({ id }) => {
    const [open, setOpen] = useState(false);
    const [result, serResult] = useState([])
    const [videoId, setVideoId] = useState(0)
    const [value, setValue] = useState({
        title: "",
        description: "",
        videoUrl: "",
        pageId: id
    })
    const changeVideo = async () => {
        try {
            const res = await axios.put(`http://frez773-001-site1.atempurl.com/api/VideoLesson/video/${videoId}/update`,{...value}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            message.success(res.data.message)
        } catch (error) {
            message.error(error.response.message)
        }
    }
    useEffect(() => {
        const getData = async () => {
            const resp = await axios(`http://frez773-001-site1.atempurl.com/api/VideoLesson/page/${id}/videos`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            serResult(resp.data)
        }
        getData()
    }, [])
    return (
        <div style={{ marginTop: '80px' }}>
            <Modal
                title="Изменить урок"
                centered
                okType='default'
                okText='Обновить'
                open={open}
                onOk={() => changeVideo()}
                onCancel={() => setOpen(false)}
                width={1000}
            >

                <Form>
                    <Input placeholder='Title' onChange={e => setValue({...value,title:e.target.value})} />
                    <Input placeholder='videoUrl' onChange={e => setValue({...value,videoUrl:e.target.value})} />
                    <TextArea placeholder='Description' onChange={e => setValue({...value,description:e.target.value})} />
                </Form>
            </Modal>
            {
                result.map(item =>
                    <Card style={{ margin: '80px 0', padding: '0 0 0 60px  ' }} extra={<button onClick={() => setOpen(true) & setVideoId(item.id)}>
                        Изменить урок</button>} key={item.id}>
                        <DeleteVideoPage id={item.id} />
                        <p style={{ fontSize: '28px' }}>{item.title}</p>
                        <p style={{ fontSize: '38px' }}>{item.description}</p>
                        <iframe width="1000" height="605" src={`https://www.youtube.com/embed/${item.videoUrl}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </Card>
                )
            }
        </div>
    );
};

export default CourseVideoPage;
