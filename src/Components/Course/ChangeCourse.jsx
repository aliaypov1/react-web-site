import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Course.module.css'

const ChangeCourse = () => {
    const {id} = useParams()
    const [value, setValue] = useState({
        Title:'',
        Description:'',
        IsFree:true,
        Price:0
    })
    console.log(value)
    const upData = async()=>{
        const resp = await axios.put(`http://frez773-001-site1.atempurl.com/api/Course/courses/${id}?Title=${value.Title}&Description=${value.Description}&IsFree=${value.IsFree}&Price=${value.Price}`,{},{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        console.log(resp)
    }
    const handleClick = () => {
        setValue(prevState => ({
          ...prevState,
          IsFree: !prevState.IsFree
        }));
      };
    return (
        <div className={style.container}>
            <Form style={{background:'white',padding:'70px',borderRadius:'5px',WebkitBoxShadow:'22px 29px 25px 4px rgba(34, 60, 80, 0.2)'}}>
                <Input placeholder='Title' style={{marginBottom:'20px'}} onChange={e => setValue({...value, Title:e.target.value})}/>
                <Input placeholder='Description' style={{marginBottom:'20px'}} onChange={e => setValue({...value, Description:e.target.value})}/>
               {value.IsFree ? <p></p> :  <Input placeholder='price' style={{marginBottom:'20px'}} onChange={e => setValue({...value, Price:e.target.value})}/>}
                <Button onClick={upData}>обновить курс</Button>
                <Button onClick={handleClick}>{
                    value.IsFree ? <p>Бесплатно</p>:<p>платно</p>
                }</Button>
            </Form>
        </div>
    );
};

export default ChangeCourse;
// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';
// import { useState } from 'react';

// const App = () => (

// //     return(
// //   <Upload {...props}>
// //     <Button icon={<UploadOutlined />}>Click to Upload</Button>
// //   </Upload>
// //     )
// return()
// );
// export default App;



// import React from 'react';
// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';

// const ChangeCourse = () => {
//     const handleFileUpload = (options) => {
//         const { onSuccess, onError, file } = options;
//         const formData = new FormData();
//         formData.append('file', file);

//         console.log(formData);

//         fetch('https://petstore.swagger.io/v2/pet/6/uploadImage', {
//             method: 'PUT',
//             headers: {
//                 'accept': 'application/json',
//                 'Content-Type': 'multipart/form-data',
//                 'file=@air4.jfif': 'type=image/jpeg'
//       },
//             body: formData,
//         })
//             .then(response => {
//                 // Обработка успешного ответа от сервера
//                 onSuccess(response);
//                 message.success(`${file.name} file uploaded successfully`);
//             })
//             .catch(error => {
//                 // Обработка ошибок при выполнении запроса
//                 onError(error);
//                 message.error(`${file.name} file upload failed.`);
//             });
//     };

//     return (
//         <div>
//             <Upload
//                 customRequest={handleFileUpload}
//                 showUploadList={false}
//             >
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//             </Upload>
//         </div>
//     );
// };

// export default ChangeCourse;

// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';
// const props = {
//   name: 'file',
//   action: 'http://frez773-001-site1.atempurl.com/api/Course/courses/15/image',
//   headers: {
//     "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
//     // authorization: 'authorization-text',
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };
// const App = () => (
//   <Upload {...props}>
//     <Button icon={<UploadOutlined />}>Click to Upload</Button>
//   </Upload>
// );
// export default App