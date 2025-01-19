"use client";

import { Link } from "react-router";
import { blogPosts } from "./data/data";
import GrantPost from "./GrantCard";

export default function JobsPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Main Navigation */}

      {/* Secondary Navigation */}
      <div className='border-b border-gray-200 bg-gray-50'>
        <div className='mx-auto hidden md:flex h-12 max-w-7xl items-center gap-4 px-4'>
          <Link
            to='/all'
            className='text-sm font-medium text-gray-700 hover:text-gray-900'
          >
            All Opportunities
          </Link>
          <Link
            to='/content'
            className='text-sm font-medium text-gray-700 hover:text-gray-900'
          >
            Content
          </Link>
          <Link
            to='/design'
            className='text-sm font-medium text-gray-700 hover:text-gray-900'
          >
            Design
          </Link>
          <Link
            to='/development'
            className='text-sm font-medium text-gray-700 hover:text-gray-900'
          >
            Development
          </Link>
          <Link
            to='/other'
            className='text-sm font-medium text-gray-700 hover:text-gray-900'
          >
            Other
          </Link>
        </div>
      </div>

      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-8 md:grid-cols-[1fr_300px]'>
        <div className='space-y-8'>
          {/* <NewsPage /> */}
          {blogPosts.map((post) => (
            <GrantPost
              key={post.id}
              username={post.author}
              handle={post.id}
              avatarUrl={post.image}
              postText={post.summary}
              grantAmount={0} // Adjust grantAmount if needed
              reactions={{ likes: 10, comments: 5, shares: 2 }}
            />
          ))}
          {/* <div className=' flex flex-col gap-4 p-4'>
            <GrantPost
              username='Adeniran Anna'
              handle='Benav'
              avatarUrl='https://via.placeholder.com/150'
              postText='Wow, I just received this amazing grant from Solana Foundation Nigeria!'
              grantAmount={1000}
              reactions={{ likes: 192, comments: 11, shares: 4 }}
            />

         
            <GrantPost
              username='Abdulhaleem Ayomide'
              handle='haleem_dev'
              avatarUrl='https://via.placeholder.com/150'
              postText='Feeling blessed to be part of this initiative. Thanks, Solana Foundation Nigeria!'
              grantAmount={1500}
              reactions={{ likes: 45, comments: 2, shares: 1 }}
            />
          </div> */}
        </div>

        {/* Sidebar */}
        <div className='space-y-8'>
          <div className='relative flex justify-center items-center gap-2 ml-8 mb-4 max-w-md'>
            <div>
              {" "}
              <h1 className='text-xl font-bold'>Become a Sponsor</h1>
              <p>Reach 60,000+ crypto talent from one single dashboard</p>
            </div>
            <div>
              <img src='/src/assets/chest.png' alt='chest' />
            </div>
          </div>
          {/* Analytics */}
          <div className='rounded-lg border border-gray-200 p-6'>
            <h2 className='mb-4 font-semibold'>Analytics</h2>
            <div className='space-y-4'>
              <div>
                <div className='text-2xl font-bold'>$2,974,140</div>
                <div className='text-sm text-gray-500'>Total Value Earned</div>
              </div>
              <div>
                <div className='text-2xl font-bold'>1380</div>
                <div className='text-sm text-gray-500'>
                  Opportunities Listed
                </div>
              </div>
            </div>
          </div>

          {/* Recent Earners */}
          <div className='rounded-lg border border-gray-200 p-6'>
            <div className='flex items-center justify-between'>
              <h2 className='font-semibold'>Recent Earners</h2>
              <Link
                to='/leaderboard'
                className='text-sm text-[#4DA2FF] hover:text-blue-700'
              >
                View All
              </Link>
            </div>
            <div className='mt-4 space-y-4'>
              {/* Example Recent Earner */}
              <div className='flex items-center gap-4'>
                <div className='h-10 w-10 overflow-hidden rounded-full bg-gray-200'>
                  <img
                    src='/placeholder.svg'
                    alt='User avatar'
                    width={40}
                    height={40}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex-1'>
                  <div className='font-medium'>User Name</div>
                  <div className='text-sm text-gray-500'>
                    Completed Frontend Task
                  </div>
                </div>
                <div className='font-medium'>500 USDC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// // src/NewsPage.tsx
// import React from "react";
// import { blogPosts } from "./data/data";
// import { Link } from "react-router-dom";

// const NewsPage: React.FC = () => {
//   return (
//     <section className='bg-white dark:bg-gray-900 py-16'>
//       <div className='text-center'>
//         <h1 className='text-4xl font-extrabold text-black dark:text-white mb-4'>
//           Stay Updated with Suilance
//         </h1>
//         <p className='text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
//           Discover insights, updates, and inspiration for freelancers and
//           businesses in the blockchain space.
//         </p>
//       </div>
//       <div className='px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16'>
//         <div className='grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3'>
//           {blogPosts.map((post) => (
//             <div
//               key={post.id}
//               className='relative group rounded-xl overflow-hidden bg-white shadow-lg transition-transform transform hover:scale-105'
//             >
//               <Link to={`/news/${post.id}`} className='block'>
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className='object-cover w-full h-56 sm:h-64 md:h-72 transition-transform duration-300 ease-out group-hover:scale-110'
//                 />
//               </Link>
//               <div className='relative p-6'>
//                 <p className='uppercase font-semibold text-xs mb-2.5 text-blue-600'>
//                   {post.date}
//                 </p>
//                 <Link to={`/news/${post.id}`} className='block mb-3'>
//                   <h2 className='text-2xl font-bold leading-tight text-black dark:text-white transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-400'>
//                     {post.title}
//                   </h2>
//                 </Link>
//                 <p className='text-gray-700 dark:text-gray-300 mb-4'>
//                   {post.summary}
//                 </p>
//                 <Link
//                   to={`/news/${post.id}`}
//                   className='font-medium text-blue-600 dark:text-blue-400 hover:underline'
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsPage;
