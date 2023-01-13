import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import Tasks from '../Tasks/Tasks';
import BottomSection from '../BottomSection/BottomSection';

const AppMainPage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Catagories></Catagories>
            <Tasks></Tasks>
            <BottomSection></BottomSection>
        </div>
    );
};

export default AppMainPage;