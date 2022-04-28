import React from 'react';
import banner from '../../images/banner.jpg'
const Banner = () => {
    return (
        <div className='container-fluid mt-3'>
            <img className='w-100' src={banner} alt="banner for header" />
        </div>
    );
};

export default Banner;