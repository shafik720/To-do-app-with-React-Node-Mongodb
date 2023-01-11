import React from 'react';
import './BottomSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendar, faPlusCircle, faGear, faClipboard } from '@fortawesome/free-solid-svg-icons';


const BottomSection = () => {
    return (
        <div className="bottom-div">
            <span draggable><FontAwesomeIcon className="single-icon" icon={faHouse} /> </span>
            <span draggable><FontAwesomeIcon className="single-icon" icon={faCalendar} /> </span>
            <span draggable><FontAwesomeIcon className="add-icon" icon={faPlusCircle} /> </span>
            <span draggable><FontAwesomeIcon className="single-icon" icon={faClipboard} /> </span>
            <span draggable><FontAwesomeIcon className="single-icon" icon={faGear} /> </span>
        </div>
    );
};

export default BottomSection;