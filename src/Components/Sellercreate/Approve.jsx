import axios from 'axios';
import React from 'react';

const Approve = ({id}) => {
        const approve = async()=>{
            const res = await fetch(`http://frez773-001-site1.atempurl.com/api/SellerApplication/${id}/approve`,{
                method:'POST',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data =await res.json()
            console.log(data)
        }
    return (
        <div>
            <a style={{color:'green'}} onClick={approve}>approve</a>
        </div>
    );
};

export default Approve;