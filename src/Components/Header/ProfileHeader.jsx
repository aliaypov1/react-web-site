import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const items = [
  {
    label:  <Link to='/Profile'>Профиль</Link>,
    key: 'mail',
    icon: <MailOutlined />,
  },
  
  {
    label: 'Настройки',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: (
                <Link to='/Security'>Безопасность</Link>
            ),
            key: 'setting:1',
          },
         
        ],
      },
    ],
  },
  {
    label: (
     <Link to='/MyCourse'>Мои курсы</Link>
    ),
    key: 'alipay',
  },
];
const ProfileNavigate = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default ProfileNavigate;