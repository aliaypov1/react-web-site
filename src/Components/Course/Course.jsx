import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import style from './Course.module.css'
import { Link } from 'react-router-dom';
import { Card,  Menu } from 'antd';
import Buy from '../Forms/Buy';
import Search from 'antd/es/transfer/search';
import gImg from '../img/girl.png'
import { seller } from '../Token/Token';
import Loader from '../UI/Loader/Loader';
import CourseURL from './CourseURL';
import SellerBuy from '../Forms/SellerBuy';
const Course = () => {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [sortByPrice, setSortByPrice] = useState(null);
    const [sellerId, setSellerId] = useState([])
    const [status, setStatus] = useState([])
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {

        const getSeller = async () => {
            const resp = await axios(`http://frez773-001-site1.atempurl.com/api/Auth/GetCurrentUser`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(resp)
            setSellerId(resp.data.sellerId)
        }
        getSeller()
    }, [])
    useEffect(() => {
        const getStatus = async () => {
            setLoading(true)
            const resp = await axios('http://frez773-001-site1.atempurl.com/api/SellerApplication/status', {

                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
            console.log(resp)
            console.log(result)
            setStatus(resp.data.applicationStatus)
            setLoading(false)
        }
        getStatus()
    }, [])
    useEffect(() => {

        const getData = async () => {
            setLoading(true)
            const resp = await axios(
                'http://frez773-001-site1.atempurl.com/api/Course/courses',

                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            );
            console.log(resp);
            console.log(result);
            setResult(resp.data)
            setLoading(false)
        };
        getData();
    }, []);
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };


    const handleSortByAsc = () => {
        setSortByPrice('asc');
    };

    const handleSortByDesc = () => {
        setSortByPrice('desc');
    };

    let sortedAndFilteredCourses = [...result];
    if (searchValue) {
        sortedAndFilteredCourses = sortedAndFilteredCourses.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    }


    if (sortByPrice === 'asc') {
        sortedAndFilteredCourses.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === 'desc') {
        sortedAndFilteredCourses.sort((a, b) => b.price - a.price);
    }
    const items = [

        {
            label: 'сортировать по',
            key: 'SubMenu',
            children: [
                {
                    type: 'group',
                    children: [
                        {
                            label: (
                                <p onClick={handleSortByDesc}>по возрастанию</p>
                            ),
                            key: 'setting:1',
                        },
                        {
                            label: (
                                <p onClick={handleSortByAsc}>по убыванию</p>
                            ),
                            key: 'setting:1',
                        },

                    ],
                },
            ],
        },

    ];
   
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div>

            <Header props={<Search
                placeholder="input search text"
                onChange={handleSearchChange}
                value={searchValue}
                style={{
                    width: 200,
                }}
            />} />
            
            <section className={style.about}>

                <div className={style.about__container}>
                    <div className="">
                        <h1 className={style.about__title}>Подберем для вас<br /> Подходящий курс</h1>
                        <p className={style.about__text}>Лучшие курсы Кыргызыстана спциально  <br /> собраны для вас</p>
                        <div className={style.buttons}>
                            {!seller ?
                                <Link to={status === 'Rejected' ? '/Rejected' : status === 'Approved' ? '/Appruved' : status === null ? '/Partner' : '/NotReviewed'} style={{ color: 'white', padding: "20px 40px ", border: '1px white solid' }}>Стать продавцом</Link>
                                :
                             ''
                            }
                        </div>

                    </div>
                    <div className={style.g__img}>
                        <img src={gImg} alt="" />
                    </div>

                </div>
            </section>
            <div className='container'>
                 {/* <CourseURL/> */}
                <Menu style={{ marginBottom: '40px' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </div>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr ', gap: '20px' }}>
                {loading ?
                    <Loader/>
                    :
                    sortedAndFilteredCourses.length > 0 ? sortedAndFilteredCourses.map((item) =>
                    (


                        <Card key={item.id} title={item.title} style={{ marginBottom: '18px', width: "400px", boxShadow: ' -1px -1px 5px 0px rgba(0,0,0,0.75)' }} extra=''>
                            <p style={{ textAlign: 'right', margin: '8px', }}><Link to={`/Course/${item.id}/${item.title}`} style={{ color: "blue" }}>деталии</Link> </p>
                            <Card type="inner" title={item.description} extra=''>
                                <div className="" style={{ background: '#85233E', width: '100%', height: '100%', borderRadius: '3px', color: "white", textAlign: 'center', fontSize: "20px" }}> {sellerId === item.sellerId ? <SellerBuy/> : <Buy name={item.title} id={item.id} children={item.isFree ? 'Бесплатно' : 'купить за ' + item.price + 'сом'} />}</div>
                            </Card>
                           
                        </Card>

                    )
                    )
                        :
                        <p style={{ color: 'black', fontSize: '60px', textAlign: 'center', padding: '50px', height: '100vh' }}>нечего не найденно</p>

                }

            </div>
        </div>
    );
};

export default Course;