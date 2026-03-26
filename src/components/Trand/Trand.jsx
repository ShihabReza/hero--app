import React from 'react';
import { FaDownload,FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Trand = (trand) => {
    const{image,title,id}=trand.trand
    
    return (
        <Link to={`/appsdetls/${id}`}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm hover:shadow-xl transition-shadow duration-300">
                <figure className='mt-5 '>
                  <img
                    src={image}
                    alt="Shoes"  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {title}
                    
                  </h2>
                  
                  <div className="card-actions justify-end">
                    <div className="badge badge"> <FaDownload className=" text-blue-500" />9M</div>
                    <div className="badge badge"><FaStar className="text-yellow-400 " />5</div>
                  </div>
                </div>
          </div>
        </Link>
    );
};

export default Trand;