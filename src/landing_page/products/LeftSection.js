import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row  ">
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
          <a href={tryDemo} className="ml-5" style={{ textDecoration: "none" }}>Try Demo 
          
       <i class="fa-solid fa-arrow-right-long"></i>
      </a>
          <a href={learnMore} style={{marginLeft : "70px", textDecoration: "none"}} className="ml-5">Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
         <div className="mt-3">
         <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href={appStore} style={{marginLeft : "20px"}}>
            <img src="media/images/appStoreBadge.svg" />
          </a>
         </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
