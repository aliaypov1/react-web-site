import React from 'react';
import { Alert, Space } from 'antd';
const DangerAlert = ({open}) => {
    if(!open) return null
    return (
        <div>
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
            >
                <Alert message="Ошибка попробуйте снова" 
                type="error" 
                showIcon  
                closable/>
            </Space>
        </div>

    );
};

export default DangerAlert;