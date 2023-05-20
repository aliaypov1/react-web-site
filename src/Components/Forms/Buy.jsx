import { Button, Modal, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import React from 'react';
import axios from 'axios';
const { confirm } = Modal;
const Buy = ({ name,id }) => {
    
    const addCourse = async()=>{
        const resp = await axios.post(`http://frez773-001-site1.atempurl.com/api/Course/add-course-to-student?courseId=${id}`,{},{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        console.log(resp)
    }

    const showConfirm = () => {
        confirm({
            title: 'Вы точно хотите приобрести этот курс',
            icon: <ExclamationCircleFilled />,
            content: name,
            okType: 'default',
            onOk() {
                addCourse()
            },
            onCancel() {
            },
        });
    };
    return (
        <div>
            <Button style={{color:'white'}} onClick={showConfirm}>Купить</Button>
        </div>
    );
};

export default Buy;