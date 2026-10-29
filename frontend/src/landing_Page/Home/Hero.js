import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>

               <img
    src="../Files/homeHero.png"
    alt="Hero image"
     className="img-fluid d-block mx-auto"
   style={{ width: "70%" }}

/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary f-5' style={{width:"25%", margin: "0 auto"}}>Sign up for free</button>
            </div>

        </div>
     );
}

export default Hero;