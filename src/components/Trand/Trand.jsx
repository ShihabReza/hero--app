import React from 'react';
import { FaDownload,FaStar } from "react-icons/fa";

const Trand = (trand) => {
    const{image,title,}=trand.trand
    
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm hover:shadow-xl transition-shadow duration-300">
  <figure className='mt-5 '>
    <img
      src={image}
      alt="Shoes" className="transform transition-transform duration-300 hover:scale-110" />
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
    );
};

export default Trand;