import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
           
            <div className='p-5 mt-5 mb-5' id="supportWrapper"> 
                <h3>Support Portal</h3>
                <a href="">Track Tickets</a>
            </div>

            <div className='row  px-5 mx-5 mb-5' >
                <div className='col-6  mb-5'>
                    <h1 className='fs-4'>Search for an snawer or browse help topics to create a ticket</h1> 
                    <input placeholder='
                    Eg: how do i activate F&O, why is my order getting rejected ...' /> 
                    <br></br>
                    <br></br>
                        <a href="">Track account opening</a>
                        &nbsp;&nbsp;
                        <a href="">Track segment activation</a>
                        &nbsp;&nbsp;
                        <a href="">Intraday margins</a>
                        &nbsp;&nbsp;
                        <a href="">Kite user manual</a>
                </div> 
                <div className='col-6  ml-5 pl-5 mb-5 text-center'>
                <h1 className='fs-4'>Featured</h1>  
                <a href="">1.  Current Taakeovers and Delisting - January 2024</a>
                <br></br><br></br>

                <a href="">2.  latest intraday Leverages - MIS & CO</a>  
                </div> 
               
            </div>
        </section>
    );
}

export default Hero;