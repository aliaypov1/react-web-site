import { Button, Modal, message } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import React from 'react';
import axios from 'axios';
const { confirm } = Modal;
const Buy = ({ name, id, children }) => {

  const addCourse = async () => {
    try {
      const resp = await axios.post(`http://frez773-001-site1.atempurl.com/api/Student/PaymentForCourse?courseId=${id}`, {}, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      message.success(resp.data.message)
    } catch (error) {
      message.error('У вас уже есть данный курс')
    }
  }

  const showConfirm = () => {
    confirm({
      title: 'Вы точно хотите приобрести этот курс',
      icon: <ExclamationCircleFilled />,
      content: name,
      okType: 'default',
      okText: 'Yes',
      onOk() {
        addCourse()
      },
      onCancel() {
      },
    });
  };
  return (
    <div>
      <Button style={{ color: 'white' }} onClick={showConfirm}>{children}</Button>
    </div>
  );
};

export default Buy;