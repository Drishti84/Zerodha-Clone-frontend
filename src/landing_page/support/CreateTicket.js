import React from 'react';

function CreateTicket() {
    return (
        <div className="container">
        <div className="row ">
          <h1 className="fs-2 mt-5 " style={{lineHeight: "1.8", fontSize: "1.2em"}} >
          To create a ticket, select a relevant topic
          </h1>
        </div>
        <div className="row mb-5">
        <div className="col-4 mb-5">
          <h4 className=" mt-5 mb-5"  >
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
          &nbsp;
           Account Opening
          </h4>
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Getting started</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}> Online</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Offline</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Charges</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Company, Partnership and HUF</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br></br>
        </div>
        
        <div className="col-4 mb-5">
          <h4 className=" mt-5 mb-5"  >
          <i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Getting started</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}> Login credentials</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Your Profile</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Account modification and segment addition</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>CMR & DP IDF</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Nomination</a><br></br>
        </div>

        <div className="col-4 mb-5">
          <h4 className=" mt-5 mb-5" >
          <i class="fa fa-bar-chart" aria-hidden="true"></i> Trading and Markets
          </h4>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}> Kite</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Margins</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Product and order types</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Kite features</a><br></br>
          
        </div>



        </div>


        <div className="row mb-5">
        <div className="col-4 mb-5">
          <h4 className="  mb-5"  >
          <i class="fa fa-credit-card" aria-hidden="true"></i>
          &nbsp;
             Funds
          </h4>
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Fund withdrawal</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}> Adding funds</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Offline</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Adding bank accounts</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>eMandates</a><br></br>
           
        </div>
        
        <div className="col-4 mb-5">
          <h4 className="  mb-5"  >
          <i class="fa fa-copyright" aria-hidden="true"></i>
          &nbsp;
          Console
          </h4>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}> Portfolio
            </a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Funds statement</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Profile</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Reports</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Referral program</a><br></br>
        </div>

        <div className="col-4 ">
          <h4 className="mb-5" >
          <i class="fa fa-circle-o" aria-hidden="true"></i>
          Coin
          </h4>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Understanding mutual funds and Coin</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}> Coin app</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Coin web</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>Transactions and reports</a><br></br>
            <a href="" style={{textDecoration:"none" , lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br></br>
          
        </div>


        
        </div>

      </div>

    );
}

export default CreateTicket;