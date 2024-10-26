import React from 'react';

function Stats() {
    return ( 
        <div className='container '>
            <div className='row p-3'>
                <div className='col-6 p-5 text-muted'>
                    <h1 className='mb-5 text-muted'>Trust with confidence</h1>
                    <h4 >Customer-first always</h4>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h4>No spam or gimmicks</h4>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4>The Zerodha universe</h4>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4>Do better with money</h4>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img  src='media/images/ecosystem.png' style={{width:"90%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5'style={{textDecoration:"none"}}>Explore our products<i class="fa-solid fa-arrow-right-long"></i></a>
                        
                        
                        <a href=''className='ml-5' style={{textDecoration:"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                 </div>
        </div>
     );
}

export default Stats;