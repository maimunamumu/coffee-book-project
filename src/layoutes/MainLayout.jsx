import React from 'react';
import NavBar from '../componet/NavBar';
import Footer from '../componet/Footer';
import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster />
           <div className='h-16'>
                <NavBar></NavBar>
           </div>
            <div className='min-h-[calc(100vh-232px)] py-12 px-12 container mx-auto'>
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;