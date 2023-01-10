import React from 'react';
import './Catagories.css';
import workImg from '../../Utilities/Img/suitcase.png';
import personalImg from '../../Utilities/Img/man (1).png';
import shoppingImg from '../../Utilities/Img/shopping-bag.png';
import sportsImg from '../../Utilities/Img/football.png';

const Catagories = () => {
    return (
        <div className="catagory-div">
            <h3 className="">Catagories</h3>
            <div className="catagory">
                <div className="catagory-single">
                    <span><img src={workImg} alt="" /></span>
                    <p>Work</p>
                </div>
                <div className="catagory-single">
                    <span><img src={personalImg} alt="" /></span>
                    <p>Personal</p>
                </div>
                <div className="catagory-single">
                    <span><img src={shoppingImg} alt="" /></span>
                    <p>Shopping</p>
                </div>
                <div className="catagory-single">
                    <span><img src={sportsImg} alt="" /></span>
                    <p>Sports</p>
                </div>
            </div>
        </div>
    );
};

export default Catagories;