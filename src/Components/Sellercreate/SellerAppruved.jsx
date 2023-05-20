import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import CreateCourse from './CreateCourse';
import Header from '../Header/Header';
const SellerAppruved = () => (
    <>
    <Header/>
  <Result
    icon={<SmileOutlined />}
    title="Размещайте свои курсы на нашей платформе"
    extra={<Link to='/DashBoard' style={{color:'blue'}}>Создовать</Link>}
  />
  <CreateCourse/>
  </>
);
export default SellerAppruved;