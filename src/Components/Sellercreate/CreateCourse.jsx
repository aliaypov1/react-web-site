import React, { useEffect, useState } from 'react';
import CreateCourseForm from '../Forms/CreateCourseForm';
import Header from '../Header/Header';
import axios from 'axios';

const CreateCourse = () => {
    const [isFree, setIsFree] = useState(false)
    const [value, setValue] = useState({
        title: '',
        description: '',
        isFree: isFree,
        price: 0
    })
    console.log(value)
    const createCourse = async()=>{
        try {
            const resp = await axios.post('http://frez773-001-site1.atempurl.com/api/Course/create-course', {...value}, {

              headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
              }
            });
            console.log(resp.data);
          } catch (error) {
            console.error(error);
          }
    }
    return (
        <div>
            <CreateCourseForm value={value} setValue={setValue} start={createCourse}/>
        </div>
    );
};

export default CreateCourse;