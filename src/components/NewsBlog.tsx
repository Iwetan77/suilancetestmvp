import React from "react";
import { Link } from "react-router";

interface NewsBlogProps {
  title: string;
  description: string;
  link: string;
}

const NewsBlog: React.FC<NewsBlogProps> = ({ title, description, link }) => {
  return (
    <div className='bg-gray-100 rounded-lg p-6 shadow-lg space-y-4'>
      <div className='flex items-start space-x-4'>
        <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
        <Link to={link}>
          <div className='bg-white p-4 rounded-lg shadow text-gray-800 hover:shadow-md transition-shadow'>
            <h3 className='text-lg font-bold'>{title}</h3>
          </div>
        </Link>
      </div>
      <div className='flex items-start space-x-4'>
        <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
        <div className='bg-blue-100 p-4 rounded-lg shadow text-gray-800'>
          <p className='text-sm'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsBlog;
