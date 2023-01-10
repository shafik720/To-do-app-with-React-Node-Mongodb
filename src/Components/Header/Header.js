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
                <span><FontAwesomeIcon icon={faUser} /></span>
            </div>
        </div>
    );
};

export default Header;