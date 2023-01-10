import React from 'react';
import './Banner.css';
import bookImg from '../../Utilities/Img/book.png'

const Banner = () => {
    return (
        <div className='banner-div'>
            <div className="banner-left">
                <h2>Manage Your Time Well</h2>
            </div>
            <div className="banner-right">
                <img src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;