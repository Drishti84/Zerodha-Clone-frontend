import React from 'react';
import { useNavigate } from "react-router-dom";
function Universe() {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/signup'); // Redirect to the internal route "/newpage"
    };
    return ( 
      <div className="container mt-5 text-center">
        <p>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <div className="row  ">
        <h1 className='mt-5'>The Zerodha Universe</h1>
        <p className='mb-5 pb-5'>Extend your trading and investment experience even further with our partner platforms</p>
     

        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" style={{height:50}}/>
          <p className='text-small text-muted'>
Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
        </div>

        <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" style={{height:40}}/>
          <p className='text-small text-muted'>
Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p>
        </div>

        <div className="col-4 p-3 ">
          <img src="media/images/streakLogo.png" style={{height:50}}/>
          <p className='text-small text-muted'>
Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className='text-small text-muted'>

          Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" />
          <p className='text-small text-muted'>

Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{height:50}}/>
          <p className='text-small text-muted'>
            
Personalized advice on life
and health insurance. No spam
and no mis-selling.
          </p>
        </div>
        <button onClick={handleClick} className="p-2 btn fs-5 mt-5" style={{width:"15%", margin:"0 auto", backgroundColor:"blue", color:"white"}}>Sign up Now</button>

      </div>
    </div>
      );
}

export default Universe;