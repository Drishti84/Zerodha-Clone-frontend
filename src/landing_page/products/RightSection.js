import React from "react";



function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row  ">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
         
            <a
              href={learnMore}
              style={{ marginLeft: "70px", textDecoration: "none" }}
              className="ml-5"
            >
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            
          </div>
        </div>

        <div className="col-6 mt-1 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
