import React from 'react';
import Banner from '../Banner/Banner';
import Phones from '../Phones/Phones';
import Brands from '../Brands/Brands';
import AnotherPhones from '../AnotherPhones/AnotherPhones';

const Home = () => {
    return (
        <div>
           
           <Banner></Banner> 
           <Brands></Brands>
           <AnotherPhones></AnotherPhones>
           <Phones></Phones>
        </div>
    );
};

export default Home;