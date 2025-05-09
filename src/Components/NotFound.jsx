import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const e=useRouteError()
    console.log(e)
    return (
        <div className='min-h-screen flex flex-col  justify-center items-center  border'>
            <div className='border rounded-2xl p-8 text-center space-y-2 '>
            <h1 className="text-5xl font-bold">Page Is not Available</h1>
            <h3 className='text-3xl font-normal'>{e.status}{e.statusText} </h3>
            <p className='text-xl font-medium'>{e.data}</p>
            </div>
           
        </div>
    );
};

export default NotFound;