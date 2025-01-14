import React from "react";
import { Link } from "react-router";

const Hero: React.FC = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto p-4'>
        {/* Left Section */}
        <div className='flex flex-col justify-center space-y-6'>
          <div className='text-4xl font-bold text-gray-800'>
            <span className='text-blue-500 font-extrabold'>Suilance</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 leading-snug'>
            Empowering Freelancers, Globally
          </h1>
          <p className='text-lg text-gray-600'>
            The ultimate freelance platform built on the Sui blockchain,
            connecting talent with opportunity in a decentralized world.
          </p>
          <div className='space-y-4'>
            <button className='w-full md:w-auto px-6 py-3 bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center shadow hover:bg-gray-200'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
                alt='Google Logo'
                className='w-5 h-5 mr-2'
              />
              Continue with Google
            </button>
            <div className='flex items-center space-x-2 text-gray-400'>
              <div className='h-px w-full bg-gray-300'></div>
              <span>OR</span>
              <div className='h-px w-full bg-gray-300'></div>
            </div>
            <div className='flex items-center w-full'>
              <input
                type='email'
                placeholder='Enter your personal or work email'
                className='flex-1 px-4 py-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <Link to={"/job"}>
                <button className='px-6 py-3 bg-blue-500 text-white rounded-r-lg'>
                  Continue with email
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='bg-gray-100 rounded-lg p-6 shadow-lg space-y-4'>
          <div className='flex items-start space-x-4'>
            <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
            <Link to={"/news"}>
              <div className='bg-white p-4 rounded-lg shadow text-gray-800'>
                How can I get started as a freelancer on Suilance?
              </div>
            </Link>
          </div>
          <div className='flex items-start space-x-4'>
            <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
            <div className='bg-blue-100 p-4 rounded-lg shadow text-gray-800'>
              It's easy! Create an account, build your profile, and start
              connecting with clients in minutes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
