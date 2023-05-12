import React from 'react';
import { Link } from 'react-router-dom';
const NotFondPage = ({children,navigate}) => {
    return (
       <div style={{textAlign:'center'}}>
      
      <h1 style={{textAlign:"center", margin:'80px', fontSize:'50px'}}>404 Not Found</h1>
      <Link style={{color:'red', fontSize:'28px'}} to={navigate}>-- {children} --</Link>
        </div>
    );
};

export default NotFondPage;