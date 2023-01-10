import React from 'react';
import './Banner.css';
import bookImg from '../../Utilities/Img/book.png'

const Banner = () => {
    return (
        <div className='banner-div'>
            <div className="banner-left">
                <h3>Manage Your Time Well</h3>
            </div>
            <div className="banner-right">
                <img src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;