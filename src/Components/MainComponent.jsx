import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

const MainComponent = () => {
    return (
        <div className='container mx-auto mt-2'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainComponent;