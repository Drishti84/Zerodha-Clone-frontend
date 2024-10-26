import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 p-5'>
        <div className='row'>

        <div className='col-6'>
               <img  style={{width:"90%",height:"80%"}}src="media/images/education.svg"/>
                </div>
            
            <div className='col-6'>
                <h3 className='mb-4 text-muted'>Free and open market education</h3>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href=''className='ml-5' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>

            <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href=''className='ml-5' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
           
            
        </div>
    </div>
     );
}

export default Education;