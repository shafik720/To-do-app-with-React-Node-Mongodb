import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
        <div className='header-div'>
            <div className="left-part">
                <button><FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className="right-part"></div>
        </div>
    );
};

export default Header;