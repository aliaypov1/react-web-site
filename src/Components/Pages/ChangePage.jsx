import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const { Option } = Select;
const ChangePage = () => {
    const { id } = useParams()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({
        pageId: id,
        title: "",
        description: "",
        content: ""
    })
    const [lesson, setLesson] = useState({
        title: "",
        description: "",
        videoUrl: "",
        pageId: id
    })
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const upDataPage = async () => {
        try {
            const resp = await axios.post('http://frez773-001-site1.atempurl.com/api/Page/course/page/update', { ...value }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            message.success(resp.data.message)
        } catch (error) {
            message.error(error.response.message)
        }
    }
    const addVideo = async()=>{
        try{
        const resp =await axios.post('http://frez773-001-site1.atempurl.com/api/VideoLesson/video/add',{...lesson},{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        message.success(resp.data.message)
    }catch(error){
        message.error(error.response.message)
    }
}
    return (
        <>
            <Button onClick={showDrawer} icon={<PlusOutlined />}>
                Редактировать страницу
            </Button>
            <Drawer
                title="Редактировать страницу"
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{
                    paddingBottom: 80,
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                    </Space>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter user name',
                                    },
                                ]}
                            >
                                <Input placeholder="Title" onChange={e => setValue({ ...value, title: e.target.value })} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="url"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter url',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Description"
                                    onChange={e => setValue({ ...value, description: e.target.value })}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="Content"
                                label="Content"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="Content" onChange={e => setValue({ ...value, content: e.target.value })} />
                                <br />
                                <br />
                                <Button onClick={upDataPage}>Обновить</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                    <h1 style={{ fontSize: '30px', margin: '40px 0' }}>Добавить видеурок</h1>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name1"
                                label="Title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter user name',
                                    },
                                ]}
                            >
                                <Input placeholder="Title"onChange={e => setLesson({...lesson,title:e.target.value})}  />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="url1"
                                label="videoUrl"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter url',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="videoUrl"
                                    onChange={e => setLesson({...lesson,videoUrl:e.target.value})} 

                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="Content1"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="Description" onChange={e => setLesson({...lesson,description:e.target.value})} />
                                <br />
                                <br />
                                <Button onClick={addVideo}>Добавить</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>

        </>
    );
};
export default ChangePage;