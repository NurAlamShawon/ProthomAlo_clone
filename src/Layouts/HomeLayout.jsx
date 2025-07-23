import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Topsection from '../Components/Topsection';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Topsection/>
            <Navbar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default HomeLayout;