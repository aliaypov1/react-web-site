import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import style from './Course.module.css'
import { Link } from 'react-router-dom';
import { Card, Menu, Skeleton } from 'antd';
import Buy from '../Forms/Buy';
import Search from 'antd/es/transfer/search';
import gImg from '../img/girl.png'
import { seller } from '../Token/Token';
import Loader from '../UI/Loader/Loader';
import SellerBuy from '../Forms/SellerBuy';
import CoursePaginate from './CoursePaginate';
import Footer from '../Footer/Footer';
import AddFavorites from '../Favorites/AddFavorites';
const Course = () => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [sortByPrice, setSortByPrice] = useState(null);
  const [sellerId, setSellerId] = useState([])
  const [status, setStatus] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [videoPerPage] = useState(6)
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
        'http://frez773-001-site1.atempurl.com/api/Course/courses?PageNumber=1&PageSize=100',

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
  const lastVideoIndex = currentPage * videoPerPage;
  const firstVideoIndex = lastVideoIndex - videoPerPage;
  const currentVideo = sortedAndFilteredCourses.slice(firstVideoIndex, lastVideoIndex)
  const paginate = pageNumber => setCurrentPage(pageNumber)
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

      <section className={style.about} >

        <div className={style.about__container}>
          <div className="">
            <h1 className={style.about__title}>Подберем для вас<br /> Подходящий курс</h1>
            <p className={style.about__text}>Лучшие курсы Кыргызыстана спциально  <br /> собраны для вас</p>
            <div className={style.buttons}>
              {loading ? <Link style={{ color: 'white', padding: "20px 40px ", border: '1px white solid' }}>Добавить курс</Link>
                :
                !seller ?
                  <Link to={status === 'Rejected' ? '/Rejected' : status === 'Approved' ? '/Appruved' : status === null ? '/CreateCursSeller' : '/NotReviewed'} style={{ color: 'white', padding: "20px 40px ", border: '1px white solid' }}>Добавить курс</Link>
                  :
                  <Link to='/ProfileSeller' style={{ color: 'white', padding: "20px 40px ", border: '1px white solid' }}>Добавить курс</Link>

              }
            </div>

          </div>
          <div className={style.g__img}>
            <img src={gImg} alt="" />
          </div>

        </div >
      </section>
      <div id='course' className='container'>
        {/* <CourseURL/> */}
        <Menu style={{ marginBottom: '40px' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      {loading ?
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr ', }}>
          <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
          <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
          <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
          <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
          <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
          <Skeleton paragraph={{ rows: 5 }} style={{ padding: '50px' }} />
        </div>
        :

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr ', gap: '20px' }}>
          {currentVideo.length > 0 ? currentVideo.map((item) =>
          (

            <>
              <Card key={item.id} title={'Заголовок : ' + item.title} style={{ marginBottom: '18px', width: "400px", boxShadow: ' -1px -1px 5px 0px rgba(0,0,0,0.75)' }} extra={<AddFavorites id={item.id} />}>
                <p style={{ textAlign: 'right', margin: '8px', }}><Link to={`/Course/${item.id}`} style={{ color: "blue" }}>Более</Link> </p>
                <Card type="inner" title={'Описание : ' + item.description} extra=''>
                  <div className="" style={{ background: '#85233E', width: '100%', height: '100%', borderRadius: '3px', color: "white", textAlign: 'center', fontSize: "20px" }}> {<Buy name={item.title} id={item.id} children={item.isFree ? 'Бесплатно' : 'купить за ' + item.price + 'сом'} />}</div>
                </Card>
              </Card>
            </>

          )
          )
            :
            <p style={{ textAlign: "center", fontSize: '40px', margin: "60px 0" }}>Нечего не найденно</p>}
        </div>
      }



      {loading ? '' :
        <div className="" style={{ textAlign: 'center', margin: "60px 0" }}>
          <CoursePaginate
            videoPerPage={videoPerPage}
            totalSize={sortedAndFilteredCourses.length}
            paginate={paginate}
          />
        </div>
      }
      {loading ? '' :
        <Footer />}
    </div>
  );
};

export default Course;