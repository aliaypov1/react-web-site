import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import style from './Course.module.css'
import { Link } from 'react-router-dom';
import { Card, Skeleton } from 'antd';
import Buy from '../Forms/Buy';


const Course = () => {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        const getData = async () => {
            setLoading(true)
            const resp = await axios.post(
                'http://frez773-001-site1.atempurl.com/api/Course/courses',
                null,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            );
            console.log(resp);
            console.log(result);
            setResult(resp.data)
            setTimeout(() => { setLoading(false) }, 2000)
        };
        getData();
    }, []);
    // const postData = async()=>{
    //     const res = await axios.post('http://frez773-001-site1.atempurl.com/api/Course/courses',{
    //         headers: {
    //             "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     console.log(res)
    // }
    return (
        <div>
            <Header />
            <section className={style.about}>

                <div className="container">
                    <h1 className={style.about__title}>Поступайте за границу <br /> с UniPage</h1>
                    <p className={style.about__text}>Ваш эксперт по образованию за рубежом</p>
                    <div className={style.buttons}>

                        <Link to='/Partner' className={style.about__text} style={{ background: 'rgb(173, 215, 20)', padding: '10px', borderRadius: '9px' }}>добавить свой курс</Link>
                    </div>
                    <div className={style.about__wrapper}>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text} >2023+</p> год основания</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>4 000+</p> cтудентов</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>5 000+</p> публикаций</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>28 000+</p> университетов</a>
                    </div>
                </div>
            </section>
            {loading ?
                <div className="container">
                    <Skeleton avatar paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                    <Skeleton avatar paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                    <Skeleton avatar paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                </div> :
                result.map((item) =>
                (

                    <div className="container" key={item.id}>
                        <Card title={item.title} style={{ marginBottom: '30px' }}>
                            <Card type="inner" title={item.description} extra={<a> приобрести за  <span style={{ color: 'green' }}>{item.price}s</span></a>}>
                                <div className="" style={{ background: 'rgb(173, 215, 20)', width: '100%', height: '100%', borderRadius: '3px', color: "white", textAlign: 'center', fontSize: "20px" }}><Buy name={item.title} id={item.id} /></div>
                            </Card>
                        </Card>
                    </div>
                )
                )

            }
            {/* {
                result.map((item) =>
                (
                   
                    <div className="container" key={item.id}>
                        <Card title={item.title} style={{marginBottom:'30px'}}>
                            <Card type="inner" title={item.description} extra={<a> приобрести за  <span style={{color:'green'}}>{item.price}s</span></a>}>
                              <div className="" style={{background:'rgb(173, 215, 20)',width:'100%',height:'100%',borderRadius:'3px',color:"white",textAlign:'center',fontSize:"20px"}}><Buy name={item.title} id={item.id}/></div>
                            </Card>
                        </Card>
                    </div>
                )
                )

            } */}

        </div>
    );
};

export default Course;