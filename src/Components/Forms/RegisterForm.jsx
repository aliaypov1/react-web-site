
import { Link } from 'react-router-dom';
import style from './Form.module.css'
import { Input, Button } from 'antd';
import Header from '../Header/Header';

const RegisterForm = ({value,setValue,createUser,loading}) => {
    return (
        <>
        <Header/>
        <div className={style.container} >
        <form type='Submit' style={{background:'white',padding:'70px',borderRadius:'5px',WebkitBoxShadow:'22px 29px 25px 4px rgba(34, 60, 80, 0.2)'}} className={style.inputs}>
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
            
            {loading ? <div className="loader"></div>:''}
            <Button
                style={{ width: '450px' }}
                onClick={e => e.preventDefault(e) & createUser(e)}>Submit</Button>
                <Link to='/Login' style={{color:'blue'}} >Sign in</Link>
        </form>
      {/* <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/3456/3456388.png" alt="" /></div> */}

    </div>
    </>
    );
};

export default RegisterForm;