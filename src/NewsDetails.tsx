// src/NewsDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./data/data";

const NewsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((blog) => blog.id === Number(id));

  if (!post) {
    return (
      <div className='text-center py-10'>
        <h2 className='text-2xl font-bold text-gray-900'>Post not found</h2>
      </div>
    );
  }

  return (
    <div className='max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12'>
      {/* Hero Section */}
      <div
        className='bg-cover bg-center h-[450px] rounded-lg overflow-hidden'
        style={{
          backgroundImage: `url(${post.image})`,
        }}
      >
        <div className='bg-gradient-to-t from-black to-transparent h-full w-full flex items-center justify-center'>
          <h1 className='text-4xl font-extrabold text-white text-center p-5'>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='max-w-3xl mx-auto mt-8'>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-500'>
                <span className='font-semibold text-[#4DA2FF]'>
                  {post.author}
                </span>{" "}
                | {post.date}
              </p>
              <p className='mt-2 text-xs text-[#4DA2FF] font-semibold uppercase'>
                {post.category.join(", ")}
              </p>
            </div>
            <div className='text-sm'>
              <p className='text-gray-700'>Views: {post.views}</p>
            </div>
          </div>

          <div className='mt-5'>
            <p className='text-lg leading-relaxed text-gray-800'>
              {post.content}
            </p>
          </div>

          {/* Tags Section */}
          <div className='flex flex-wrap mt-6 gap-3'>
            {post.tags.map((tag) => (
              <a
                key={tag}
                href='#'
                className='text-sm text-[#4DA2FF] font-medium hover:text-indigo-800 transition duration-300 ease-in-out'
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
