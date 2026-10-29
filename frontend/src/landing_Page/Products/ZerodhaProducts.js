import React from "react";

function ZerodhaProducts() {
  return (
    <div className="container border-top">
      <div className="row align-items-center">
        <div className="col-md-7 ps-5">
          <img
            src="/Files/kite.png"
            alt="Kite trading platform"
            className="img-fluid p-6"
            style={{ maxWidth: "558px", height: "auto" }}
          />
        </div>
        <div className="col-md-5" style={{ paddingLeft: "40px" }}>
          <h2 className="mb-4">Kite</h2>

          <p className="fs-5 lh-lg">
            Our ultra-fast flagship trading platform with
            <br />
            streaming market data, advanced charts,
            <br />
            an elegant UI, and more. Enjoy the Kite
            <br />
            experience seamlessly on your Android and
            <br />
            iOS devices.
          </p>
        </div>
      </div>


<div className="row align-items-center my-5">

  {/* Left side: Text */}
  <div className="col-md-5 ps-md-5">
    <h2 className="mb-4">Console</h2>

    <p className="fs-5 lh-lg">
      The central dashboard for your Zerodha
      <br />
      account. Gain insights into your trades and
      <br />
      investments with in-depth reports and
      <br />
      visualisations.
    </p>
  </div>

  {/* Right side: Image */}
  <div className="col-md-7">
    <img
      src="/Files/console.png"
      alt="Console dashboard"
      className="img-fluid"
      style={{ maxWidth: "558px", height: "auto" }}
    />
  </div>

</div>




      <div className="row align-items-center" style={{ marginTop: "20px" }}>
        <div className="col-md-7 ps-5">
          <img
            src="/Files/coin.png"
            alt="Kite trading platform"
            className="img-fluid p-6"
            style={{ maxWidth: "558px", height: "auto" }}
          />
        </div>

        <div className="col-md-5" style={{ paddingLeft: "40px" }}>
          <h2 className="mb-4">Coin</h2>

          <p className="fs-5 lh-lg">
            Buy direct mutual funds online, commission- <br />
            free, delivered directly
            to your Demat 
            <br/>account. Enjoy the investment experience 
             <br/>on your
            Android and iOS devices.
          </p>
        </div>
      </div>


<div className="row align-items-center my-5">

  {/* Left side: Text */}
  <div className="col-md-5 ps-md-5">
    <h2 className="mb-4">Kite Connect API</h2>

    <p className="fs-5 lh-lg">
     Build powerful trading platforms and <br/>
     experiences with our super simple <br/>
     HTTP/JSON APIs. If you are a startup, build <br/>
     your investment app and showcase it to our <br/>
     clientbase.
    </p>
  </div>

  {/* Right side: Image */}
  <div className="col-md-7">
    <img
      src="/Files/kiteconnect.png"
      alt="Console dashboard"
      className="img-fluid"
      style={{ maxWidth: "558px", height: "auto" }}
    />
  </div>

</div>




 {/* last left */}
      <div className="row align-items-center">
        <div className="col-md-7 ps-5">
          <img
            src="/Files/varsity.png"
            alt="Kite trading platform"
            className="img-fluid p-6"
            style={{ maxWidth: "558px", height: "auto" }}
          />
        </div>

        <div className="col-md-5" style={{ paddingLeft: "40px" }}>
          <h2 className="mb-4">Varsity mobile</h2>

          <p className="fs-5 lh-lg">
            An easy to grasp, collection of stock market lessons with 
             <br/>
            
            in-depth coverage and illustrations. Content is broken 
            <br/>
            down into bite-size
            cards to help you learn on the go.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default ZerodhaProducts;
