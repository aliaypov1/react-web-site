import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import ForgotPasswordForm from '../Forms/ForgotPasswordForm';
import SuccessAlert from '../UI/Alerts/SuccessAlert';
import DangerAlert from '../UI/Alerts/DangerAlert';

const ForgotPassword = () => {
    const [dangerAlert, setDangerAlert] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState({
        recipientEmail: ""
    })
    const forgotPassword = async () => {
        try {
            setLoading(true)
            const res = await axios.post(`${BASE_URL}ForgotPassword`, { ...value })
            console.log(res)
            if (res.data.statusCode == 200) {
                setSuccessAlert(true)
                setDangerAlert(false)
            } else {
                setDangerAlert(true)
                setSuccessAlert(false)
            }
        } catch (e) {
            setDangerAlert(true)
            setSuccessAlert(false)
        }
        setLoading(false)

    }
    if(loading) return <p>Loading...</p>
    return (
        <div>
            <SuccessAlert open={successAlert} />
            <DangerAlert open={dangerAlert} />
            <ForgotPasswordForm value={value} setValue={setValue} forgotPassword={forgotPassword} />
        </div>
    );
};

export default ForgotPassword;