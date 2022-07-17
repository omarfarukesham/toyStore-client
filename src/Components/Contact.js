import React from 'react';

import Footer2 from './Footer/Footer2';

const Contact = () => {
    return (
        <>
   
        <div className='row'>
            <div className='col-md-6'>
                <div class="card m-5">
                    <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHNlcnZpY2VzfGVufDB8fDB8fA%3D%3D&w=300&q=80" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title fw-bold"><i class="fa-solid fa-location-arrow text-warning fw-bold mx-2 fs-3"></i>Dhaka Office</h5>
                        <address className='fw-bold'> 
                            <p>100/A, Free Garden Road, Bushndhara R/A, Dhaka, Bangladesh</p>
                            Phone : +8801775070627<br></br>
                            Email : toystore@gmail.com 
                        </address>
                        <p class="card-text fw-bold">Web Application || Could Hosting || Software Development</p>
                        <a href="#" class="btn btn--design1">Buy Service </a>
                    </div>
                </div>

            </div>
            <div className='col-md-6'>
                <div class="card m-5">
                    <img src="https://image.shutterstock.com/image-photo/young-business-man-working-home-260nw-1654831870.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title fw-bold"><i class="fa-solid fa-location-arrow text-warning fw-bold mx-2 fs-3"></i>Rajshahi Office</h5>
                        <address className='fw-bold'> 
                            <p>99/A, Kajla University Road, Rajshahi R/A, Rajshahi, Bangladesh</p>
                            Phone : +8801775070627<br></br>
                            Email : toystore@gmail.com 
                        </address>
                        <p class="card-text fw-bold">Web Application || Could Hosting || Software Development</p>
                        <a href="#" class="btn btn--design1">Buy Service </a>
                    </div>
                </div>

            </div>

        </div>
        <Footer2></Footer2>
             
        </>
    );
};

export default Contact;