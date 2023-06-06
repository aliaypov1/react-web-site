import { message } from 'antd';
import axios from 'axios';
import CourseURL from './CourseURL';
const UploadImageForm = ({id}) => {
    const handleImageUpload = async (event) => {
        const imageFile = event.target.files[0];
      
        // Создаем экземпляр объекта FormData
        const formData = new FormData();
      
        // Добавляем файл картинки в объект FormData
        formData.append("image", imageFile);
      
        try {
          // Выполняем запрос с помощью axios
          const response = await axios.put(`http://frez773-001-site1.atempurl.com/api/Course/courses/${id}/image`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
          });
          message.success('Вы успешно загрузили фаил')
        } catch (error) {
            message.error(error.response.message)
        }
      };
  return (
    <div>
      <br />
      <br />
      <div className="">
      <p style={{fontSize:'29px'}}>Загруить Изображение</p>
      <CourseURL/>
      </div>
      <br />
      
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};
export default UploadImageForm