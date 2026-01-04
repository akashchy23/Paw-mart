import React, { use } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { HashLoader } from 'react-spinners';
import { ToastContainer } from "react-toastify";




const RootLayout = () => {
    const { loading } = use(AuthContext);
    if (loading) {
        return <div className="h-screen flex justify-center items-center"><HashLoader color="#049347" /></div>
    }
    return (
        <div>
           <div className='sticky top-0 z-1'>
             <Navbar></Navbar>
           </div>
            <div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <ToastContainer position="top-right" />
        </div>
    );
};

export default RootLayout;