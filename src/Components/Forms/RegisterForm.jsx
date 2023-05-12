
import { Link } from 'react-router-dom';
import style from './Form.module.css'
import { Input, Button } from 'antd';

const RegisterForm = ({value,setValue,createUser}) => {
    return (
        <div className={style.container} >
        <form type='Submit' className={style.inputs}>
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
            <Button
                style={{ width: '450px' }}
                onClick={e => e.preventDefault(e) & createUser(e)}>Submit</Button>
                <Link to='/Login' style={{color:'white'}} >Sign in</Link>
        </form>
      <div className="img"><img src="https://cdn-icons-png.flaticon.com/512/3456/3456388.png" alt="" /></div>

    </div>
    );
};

export default RegisterForm;