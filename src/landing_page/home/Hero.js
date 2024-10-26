import React from 'react';
import { useNavigate } from "react-router-dom";


function Hero() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signup'); // Redirect to the internal route "/newpage"
      };
    return ( 
        <div className="container p-5 text-center mb-5">
            <div className="row">
                <img src="media/images/homeHero.png" alt="hero img" className="mb-5"/>
            <h1 className='mt-5 '>Invest in everything </h1>
            <p className='mt-2 fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button onClick={handleClick} className="p-2 btn fs-5 mt-5" style={{width:"15%", margin:"0 auto", backgroundColor:"blue", color:"white"}}>Sign up Now</button>
            </div>

        </div>
     );
}

export default Hero;