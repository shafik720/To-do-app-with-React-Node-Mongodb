import React from 'react';
import workImg from '../../Utilities/Img/suitcase.png';
import './Catagories.css';

const Catagories = () => {
    return (
        <div className="catagory-div">
            <h3 className="">Catagories</h3>
            <div className="catagory">
                <div className="catagory-single">
                    <span><img src={workImg} alt="" /></span>
                    <p>Work</p>
                </div>
            </div>
        </div>
    );
};

export default Catagories;