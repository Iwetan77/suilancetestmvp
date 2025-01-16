// src/NewsPage.tsx
import React from "react";
import { blogPosts } from "./data/data";
import { Link } from "react-router-dom";

const NewsPage: React.FC = () => {
  return (
    <section className='bg-white dark:bg-gray-900 py-16'>
      <div className='text-center'>
        <h1 className='text-4xl font-extrabold text-black dark:text-white mb-4'>
          Stay Updated with Suilance
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
          Discover insights, updates, and inspiration for freelancers and
          businesses in the blockchain space.
        </p>
      </div>
      <div className='px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16'>
        <div className='grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3'>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className='relative group rounded-xl overflow-hidden bg-white shadow-lg transition-transform transform hover:scale-105'
            >
              <Link to={`/news/${post.id}`} className='block'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='object-cover w-full h-56 sm:h-64 md:h-72 transition-transform duration-300 ease-out group-hover:scale-110'
                />
              </Link>
              <div className='relative p-6'>
                <p className='uppercase font-semibold text-xs mb-2.5 text-blue-600'>
                  {post.date}
                </p>
                <Link to={`/news/${post.id}`} className='block mb-3'>
                  <h2 className='text-2xl font-bold leading-tight text-black dark:text-white transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-400'>
                    {post.title}
                  </h2>
                </Link>
                <p className='text-gray-700 dark:text-gray-300 mb-4'>
                  {post.summary}
                </p>
                <Link
                  to={`/news/${post.id}`}
                  className='font-medium text-blue-600 dark:text-blue-400 hover:underline'
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
