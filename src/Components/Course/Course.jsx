import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import style from './Course.module.css'
import { Link } from 'react-router-dom';
import { Card, Skeleton, Menu } from 'antd';
import Buy from '../Forms/Buy';
import Search from 'antd/es/transfer/search';
const Course = () => {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [sortByPrice, setSortByPrice] = useState(null);
    const [sellerId, setSellerId] = useState([])

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
            setTimeout(() => { setLoading(false) }, 500)
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

                <div className="container">
                    <h1 className={style.about__title}>Подберем для вас <br /> подходящий курс</h1>
                    <p className={style.about__text}>Лучшие курсы Кыргызыстана спциально собраны <br /> для вас</p>
                    <div className={style.buttons}>

                        {/* <Link className={style.about__text} style={{ background: 'rgb(173, 215, 20)', padding: '10px', borderRadius: '9px' }}></Link> */}
                    </div>
                    <div className={style.about__wrapper}>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text} >2023+</p> год основания</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>4 000+</p> cтудентов</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>5 000+</p> публикаций</a>
                        <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>28 000+</p> университетов</a>
                    </div>
                </div>
            </section>
            <div className='container'>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
            </div>
            {loading ? <p>dada</p>:''}
            <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px'}}>
                {loading ?
                    <div className="container">
                        <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                        <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                        <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
                    </div> :
                    sortedAndFilteredCourses.length > 0 ? sortedAndFilteredCourses.map((item) =>
                    (


                        <Card key={item.id} title={item.title} style={{ marginBottom: '30px', width:'400px' }} extra={sellerId === item.sellerId ? <Link to={`/ChangeCourse/${item.id}`}>Коректировать</Link> : <></>}>
                            <p style={{ textAlign: 'right', margin: '8px', }}><Link to={`/Course/${item.id}/${item.title}`} style={{ color: "blue" }}>деталии</Link> </p>
                            <Card type="inner" title={item.description} extra=''>
                                <div className="" style={{ background: 'rgb(173, 215, 20)', width: '100%', height: '100%', borderRadius: '3px', color: "white", textAlign: 'center', fontSize: "20px" }}><Buy name={item.title} id={item.id} children={item.isFree ? 'Бесплатно' : 'купить за '+item.price + 'сом'} /></div>
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