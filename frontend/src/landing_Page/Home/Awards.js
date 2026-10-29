import React from 'react';

function Awards() {
    return ( 
        <div className='container m-5'>
            <div  className='row'  style={{ marginLeft: '5%' }}>
            
                <div className='col-12 col-md-6 mb-4' >
                    <div >
                        <h1 className="mt-5 mb-4">Trust with confidence</h1>
                        
                    <h4>Customer-first always</h4>
                    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <div>
                        <h4>No spam or gimmicks</h4>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>

                    <div>
                        <h4>The Zerodha universe</h4>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div>
                        <h4>Do better with money</h4>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                    </div>
                    
                </div>
                  <div className='col-12 col-md-6'>
                    <img style={{width:"100%"}} src='../Files/icons.png' alt='Hero image'/>
                </div>
            </div>
        </div>

     );
}

export default Awards;