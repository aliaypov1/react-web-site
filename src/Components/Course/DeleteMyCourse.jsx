// import React, { useState } from 'react';
// import { ExclamationCircleFilled } from '@ant-design/icons';
// import { Button, Modal, Space } from 'antd';
// import axios from 'axios';
// const DeleteMyCourse = ({courseId}) => {
//     const [loading, setLoading] = useState(false)
//     const [result, setResult] = useState([]);
//     const { confirm } = Modal;

//     const deleteCousre = async()=>{
//         const resp = await axios.post(`http://frez773-001-site1.atempurl.com/api/Course/remove-course-from-student?courseId=${courseId}`,{},{
//             headers: {
//                 "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//         console.log(resp)
//       }
//     const showDeleteConfirm = () => {
//         confirm({
//           title: 'Are you sure delete this task?',
//           icon: <ExclamationCircleFilled />,
//           content: 'Some descriptions',
//           okText: 'Yes',
//           okType: 'danger',
//           cancelText: 'No',
//           onOk() {
//             deleteCousre()
//           },
//           onCancel() {
//           },
//         });
//       };
//     return (
//         <div>
//              <Button onClick={showDeleteConfirm} type="dashed">
//              удалить курс 🗑️
//     </Button>
//         </div>
//     );
// };

// export default DeleteMyCourse;
import React, { useState } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import axios from 'axios';

const DeleteMyCourse = ({ courseId, onCourseDeleted }) => {
  const [loading, setLoading] = useState(false);
  const { confirm } = Modal;

  const deleteCourse = async () => {
    const resp = await axios.post(`http://frez773-001-site1.atempurl.com/api/Course/remove-course-from-student?courseId=${courseId}`, {}, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    console.log(resp);
    onCourseDeleted(courseId); // Вызов функции после удаления курса
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure to delete this task?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okText: <p>yes</p>,
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteCourse();
      },
      onCancel() {
      },
    });
  };

  return (
    <div>
      <Button onClick={showDeleteConfirm} type="dashed">
        удалить курс 🗑️
      </Button>
    </div>
  );
};

export default DeleteMyCourse;
