import React, { useState } from "react";
import { Link } from "react-router";
import NewsPage from "../Newspage"; // Adjust the path as per your project structure

const Hero: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-teal-400 to-green-400'>
      {/* Navbar */}
      <nav className='bg-gray-800 w-full text-white'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center gap-2 text-xl font-bold'>
            <img
              src='/src/assets/sui-sym.jpg'
              alt='sui-logo'
              className='w-8 h-8 rounded-full'
            />
            <span className='text-yellow-200'>Suilance</span>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={toggleNav}
            className='sm:hidden flex items-center text-white focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className='hidden sm:flex items-center space-x-6'>
            <Link
              to='/job'
              className='hover:text-yellow-200 transition duration-300'
            >
              Jobs
            </Link>
            <Link
              to='/news'
              className='hover:text-yellow-200 transition duration-300'
            >
              News
            </Link>
            <Link
              to='/about'
              className='hover:text-yellow-200 transition duration-300'
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Mobile Links */}
        {isNavOpen && (
          <div className='sm:hidden bg-gray-700 text-white'>
            <Link
              to='/job'
              className='block py-2 px-4 hover:bg-gray-600'
              onClick={toggleNav}
            >
              Jobs
            </Link>
            <Link
              to='/news'
              className='block py-2 px-4 hover:bg-gray-600'
              onClick={toggleNav}
            >
              News
            </Link>
            <Link
              to='/about'
              className='block py-2 px-4 hover:bg-gray-600'
              onClick={toggleNav}
            >
              About Us
            </Link>
          </div>
        )}
      </nav>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto p-6'>
        {/* Left Section */}
        <div className='flex flex-col justify-center space-y-6 text-white'>
          <div className='flex gap-2 items-center text-4xl font-bold'>
            <div className='rounded-full bg-white p-2'>
              <img
                src='/src/assets/sui-sym.jpg'
                alt='sui-logo'
                width={30}
                height={30}
              />
            </div>
            <span className='text-yellow-200 font-extrabold'>Suilance</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>
            Empowering Freelancers, Globally
          </h1>
          <p className='text-lg'>
            The ultimate freelance platform built on the Sui blockchain,
            connecting talented individuals with opportunities in a
            decentralized world.
          </p>
          <div className='space-y-6'>
            <button className='w-full md:w-auto px-6 py-3 flex gap-2 justify-center items-center bg-gray-800 text-white rounded-lg shadow-xl hover:bg-gray-700'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'
                alt='Google Logo'
                className='w-5 h-5 mr-2'
              />
              Continue with Google
            </button>
            <div className='flex items-center space-x-2 text-white'>
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
                <button className='px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-500'>
                  Continue with email
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='bg-white rounded-lg p-8 shadow-lg space-y-6'>
          <div className='flex items-center space-x-4'>
            <img
              src='/src/assets/freelancer1.jpg' // New image for the "getting started" section
              alt='Freelancer Icon'
              className='w-10 h-10 rounded-full'
            />
            <Link to={"/news"}>
              <div className='bg-blue-100 p-4 rounded-lg shadow-md text-gray-800 hover:bg-blue-200'>
                How can I get started as a freelancer on Suilance?
              </div>
            </Link>
          </div>

          <div className='flex items-center space-x-4'>
            <img
              src='/src/assets/freelancer2.jpg' // New image for the "easy steps" section
              alt='Step Icon'
              className='w-10 h-10 rounded-full'
            />
            <div className='bg-blue-50 p-4 rounded-lg shadow-md text-gray-800'>
              It's easy! Create an account, build your profile, and start
              connecting with clients in minutes.
            </div>
          </div>

          {/* Add more visuals if needed */}
          <img
            src='https://images.unsplash.com/photo-1564542747866-0132721bca30?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Main hero image for the right section
            alt='Freelance Platform Illustration'
            className='rounded-lg w-full h-60 object-cover shadow-lg'
          />
        </div>
      </div>

      {/* News Section */}
      <NewsPage />
    </div>
  );
};

export default Hero;

// https://www.youtube.com/watch?v=zMYgfxNbOkk
// https://www.youtube.com/watch?v=eyeFC1RHQUc
// https://www.youtube.com/watch?v=Q9uXOSGS8IQ
