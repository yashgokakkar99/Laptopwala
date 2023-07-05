import React from 'react';
import img1 from '../images/images (1).jpg'
import img2 from '../images/images.jpg'

const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center mt-0">
      <div className="w-screen bg-white shadow-md rounded-md p-8">
        <header className="bg-blue-500 text-white text-center py-4 px-8 rounded-md mt-0">
          <h1 className="text-4xl font-bold ">Welcome to Our Home</h1>
        </header>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img src={img2} alt="Image 2" className="w-full h-96 object-cover rounded-md mt-4" />
          </div>
          <div className="relative">
            <img src={img1} alt="Image 4" className="w-full h-64 object-cover rounded-md mt-4" />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Explore More!!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
