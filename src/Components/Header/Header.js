import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
        <div className='header-div'>
            <div className="left-part">
                <button><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <div className="right-part">
                <span><img src="https://i.ibb.co/J5bQFs4/1668538578655.png" alt="" /></span>
            </div>
        </div>
    );
};

export default Header;