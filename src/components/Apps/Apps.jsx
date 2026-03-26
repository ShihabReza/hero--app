import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';


const Apps = () => {
    const appaData = useLoaderData()
    const allApp = appaData
    console.log(allApp)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-2xl mx-auto px-4 mt-10">
            {
                allApp.map(allApp=><App key={allApp.id} allApp={allApp}></App>)
            }
        </div>
    );
};

export default Apps;