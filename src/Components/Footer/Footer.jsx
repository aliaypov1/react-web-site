import React from 'react';

const Footer = () => {
    return (
        <footer style={{width:'100%',padding:'20px',background:'#85233E',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div className="footer__logo">
                <h1 style={{fontSize:'40px',color:"white"}}>
                    Course
                </h1>
            </div>
            <nav style={{display:'flex',columnGap:"25px",color:'white'}}>
                <a href="">Contact</a>
                <a href="">menu</a>
                <a href="">2023</a>
            </nav>
        </footer>
    );
};

export default Footer;