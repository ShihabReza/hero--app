import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppsDetls = () => {
    const {id} = useParams()
    const appId = parseInt(id)
    const data = useLoaderData()
    const singalData = data.find(app=>app.id===appId)
    console.log(singalData)
    console.log(id,data)
   
    return (
         <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
                <img
                    src={singalData.image}
                    alt={singalData.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                />

                <h2 className="text-xl font-bold">{singalData.title}</h2>
                <p className="text-gray-600">{singalData.companyName}</p>

                <p className="mt-2 text-sm">{singalData.description}</p>

                <div className="mt-3 flex justify-between text-sm text-gray-500">
                    <span>Size: {singalData.size} MB</span>
                    <span>Reviews: {singalData.reviews}</span>
                </div>

                <a href="https://play.google.com/store/games?device=windows">
                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">
                    Install
                </button>
                </a>
            </div>
        </div>
    );
};

export default AppsDetls;