import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import { Link } from 'react-router-dom';
const onClick = ({ key }) => {
  message.info(`вы перешли на страницу ${key}`);
};
const items = [
  {
    label: <Link to='/Profile'>Профиль</Link>,
    key: 'профиля',
  },
  {
    label: <Link to='/Security'>Безопасность</Link>,
    key: 'Безопасноть',
  },
  
];
const HeaderNavigate = ({children}) => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {children}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default HeaderNavigate;