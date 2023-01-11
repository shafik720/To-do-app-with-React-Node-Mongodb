import React from 'react';
import './BottomSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendar, faPlusCircle } from '@fortawesome/free-solid-svg-icons';


const BottomSection = () => {
    return (
        <div className="bottom-div">
            <div className="bottom-left">
                <span><FontAwesomeIcon className="single-icon" icon={faHouse} /> </span>
                <span><FontAwesomeIcon className="single-icon" icon={faCalendar} /> </span>
            </div>
            <div className="bottom-mid">
                <span><FontAwesomeIcon className="add-icon" icon={faPlusCircle} /> </span>
            </div>
            <div className="bottom-right">
                <span><FontAwesomeIcon className="single-icon" icon={faHouse} /> </span>
                <span><FontAwesomeIcon className="single-icon" icon={faCalendar} /> </span>
            </div>
        </div>
    );
};

export default BottomSection;