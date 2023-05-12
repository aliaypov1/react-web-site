import React from 'react';
import { Link } from 'react-router-dom';
const NotFondPage = ({children,navigate}) => {
    return (
        <body className='not__found'>
       <div style={{textAlign:'center'}}>
      
      <h1 style={{ fontSize:'100px',marginBottom:'50px'}}>404</h1>
      <h1 style={{ fontSize:'58px',marginBottom:'50px'}}>Page Not Found</h1>
      <Link style={{color:'red', fontSize:'40px',marginBottom:'100px'}} to={navigate}><span style={{color:'white',fontSize:'60px'}}>←</span>  {children}</Link>
        </div>
        </body>
    );
};

export default NotFondPage;