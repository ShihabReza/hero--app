import React from 'react';
import Trand from '../Trand/Trand';
import { Link } from 'react-router';

const Tranding = ({ trandingApp }) => {
    const trand = trandingApp || [];

    return (
        <div>
            <h1 className='text-5xl text-center mt-10 mb-2 font-bold'>
                Trending Apps
            </h1>

            <p className='text-center mt-2 mb-10'>
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-2xl mx-auto px-4">
                {
                    Array.isArray(trand) &&
                    trand.map(item => (
                        <Trand key={item.id} trand={item} />
                    ))
                }
            </div>

            <div className='text-center mt-5 mb-5'>
                <Link to='/Apps'>
                    <button className='btn border-indigo-300 text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-2'>
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Tranding;