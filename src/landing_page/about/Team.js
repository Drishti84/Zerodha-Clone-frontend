import React from "react";

function Teams() {
  return (
    <div className="container">
      <div className="row">
        <h1 className=" text-center border-top mt-5 pt-5">People</h1>
      </div>
      <div className="row text-muted fs-6 text-center">
        <div className="col p-5">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <br></br>
          <h4 className="pt-3">Nithin Kamath</h4>

          <h6>Founder , CEO</h6>
        </div>

        <div className="col p-5 mt-5" style={{textAlign:"left"}}>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry.
          <br></br>
          <br></br>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
          and the Market Data Advisory Committee (MDAC).
          <br></br>
          <br></br>
          Playing basketball is his zen.
          <br></br>
          <br></br>
          Connect on <a href="#" style={{textDecoration:"none"}}>Homepage</a>/<a href="#" style={{textDecoration:"none"}}>TradingQnA</a>/
          <a href="#" style={{textDecoration:"none"}}>Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default Teams;
