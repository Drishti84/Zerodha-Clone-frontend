import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function OpenAccount() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const match = document.cookie.match(/(?:^|;\s*)isLoggedIn=([^;]*)/);
        setIsLoggedIn(!!(match && match[1]));
    }, []);

    const handleClick = () => {
        navigate('/signup');
    };

    return (
        <div className="container p-5 text-center mb-5">
            <div className="row">
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p className='mt-2 fs-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades..</p>
                {!isLoggedIn && (
                    <button onClick={handleClick} className="p-2 btn fs-5 mt-5" style={{width:"15%", margin:"0 auto", backgroundColor:"blue", color:"white"}}>Sign up Now</button>
                )}
            </div>
        </div>
    );
}

export default OpenAccount;
