// import { Button } from 'antd';
// import axios from 'axios';
// import React, { useState } from 'react';

// const CreatePages = () => {
//     const [value,setValue] = useState([])
//     const CreatePages = async()=>{
//         const res = await axios.post(`http://frez773-001-site1.atempurl.com/api/Page/course/page/create`,{})
//     }
//     return (
//         <div>
//             <Button>Добавить страницу</Button>
//         </div>
//     );
// };

// export default CreatePages;
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
const { Option } = Select;
const CreatePages = ({courseId}) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [value, setValue] = useState({
        courseId: courseId,
        title: "",
        description: "",
        content: ""
    })
    const createPages = async () => {
        try{
        const res = await axios.post(`http://frez773-001-site1.atempurl.com/api/Page/course/page/create`, {...value},{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        message.success(res.data.message)
    }catch(error){
        message.error(error.response.message)
    }
}
    return (
        <>
            <Button onClick={showDrawer} icon={<PlusOutlined />}>
                Новая страница
            </Button>
            <Drawer
                title="Create a new account"
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{
                    paddingBottom: 80,
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={createPages}>
                            Создать
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="Title"
                                label="Title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Title',
                                    },
                                ]}
                            >
                                <Input placeholder="Title" onChange={e => setValue({...value, title:e.target.value})} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="Description"
                                label="Descripton"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Description',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="Description" onChange={e => setValue({...value,description:e.target.value})} />
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
                                <Input.TextArea rows={4} placeholder="Content" onChange={e => setValue({...value,content:e.target.value})} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};
export default CreatePages;