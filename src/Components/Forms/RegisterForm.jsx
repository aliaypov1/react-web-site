
import { Link } from 'react-router-dom';
import style from './Form.module.css'
import { Input, Button } from 'antd';
import Header from '../Header/Header';
import regImg from '../img/png.png'
import Loader from '../UI/Loader/Loader';
const RegisterForm = ({ value, setValue, createUser, loading }) => {
  return (
    <>
      <div className={style.autorization__container} >
        <form type='Submit' style={{ background: '#F6F6F6', padding: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className={style.inputs}>
          <h1 style={{ color: 'black', fontSize: '62px', fontWeight: '700' }}>Регистрация</h1>
          <p style={{ color: 'black', fontSize: '30px', fontWeight: '700' }}>Добро пожаловать!</p>
          <label htmlFor="">
            <Input
              style={{ width: '450px' }}
              type="email"
              placeholder='Email'
              onChange={e => setValue({ ...value, email: e.target.value })}
            />
          </label>
          <label htmlFor="">
            <Input
              style={{ width: '450px' }}
              type="password"
              placeholder='Password'
              onChange={e => setValue({ ...value, password: e.target.value })} />
          </label>
          <label htmlFor="">
            <Input
              style={{ width: '450px' }}
              type="text"
              placeholder='userName'
              onChange={e => setValue({ ...value, userName: e.target.value })} />
          </label>

          {loading ? <Loader /> : ''}
          <Button
            style={{ width: '450px', background: '#85233E', color: 'white' }}
            onClick={e => e.preventDefault(e) & createUser(e)}>Зарегестрироваться</Button>
          <Link to='/Login' style={{ color: 'black' }} >Уже зарегистрированы? Войти</Link>
        </form>
        {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/3456/3456388.png" alt="" /></div> */}
        <div className={style.img}>
          <img src={regImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default RegisterForm;