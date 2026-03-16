import React from 'react';

const Section = () => {
    return (
       <div className="bg-gray-100 py-16">
  <div className="max-w-screen-2xl mx-auto px-4 text-center">
    
    <h2 className="text-4xl font-bold mb-6">
      Trusted by Millions, Built for You
    </h2>

    
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
      
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-400 font-semibold">Total Downloads</p>
        <p className="text-3xl font-bold mt-2">29.6M</p>
        <p className="text-green-500 mt-1 text-sm">21% more than last month</p>
      </div>

      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-400 font-semibold">Total Reviews</p>
        <p className="text-3xl font-bold mt-2">906K</p>
        <p className="text-green-500 mt-1 text-sm">46% more than last month</p>
      </div>

      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-400 font-semibold">Active Apps</p>
        <p className="text-3xl font-bold mt-2">132+</p>
        <p className="text-green-500 mt-1 text-sm">31 more will Launch</p>
      </div>

    </div>
  </div>
</div>
    );
};

export default Section;