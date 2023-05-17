import React from 'react';

const Reject = ({id}) => {
    const reject = async()=>{
        const res = await fetch(`http://frez773-001-site1.atempurl.com/api/SellerApplication/${id}/reject`,{
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
            <button style={{color:'white'}} onClick={reject}>Reject</button>
        </div>
    );
};

export default Reject;