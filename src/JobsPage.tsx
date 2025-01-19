"use client";

import { useState } from "react";
import { Link } from "react-router";
import Navbar from "./components/Navbar";

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState("bounties");

  const opportunities = [
    {
      id: 98,
      title: "Frontend Development Task",
      company: "Company Name",
      reward: "500 USDC",
      icon: (
        <svg
          className='h-6 w-6 text-gray-600'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M12 2v20' />
          <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
        </svg>
      ),
    },
    {
      id: 99,
      title: "Backend API Development",
      company: "Tech Solutions",
      reward: "800 USDC",
      icon: (
        <svg
          className='h-6 w-6 text-gray-600'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M3 10h18M9 21V3m6 18V3' />
        </svg>
      ),
    },
    {
      id: 100,
      title: "UI/UX Design",
      company: "Creative Minds",
      reward: "600 USDC",
      icon: (
        <svg
          className='h-6 w-6 text-gray-600'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
          <path d='M8 3v18M16 3v18' />
        </svg>
      ),
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Main Navigation */}
      <Navbar />

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
          {/* Welcome Section */}
          <div className='rounded-lg bg-[#4DA2FF] p-6'>
            <h1 className='text-2xl font-bold text-white'>Welcome Adrian</h1>
            <p className='text-white/80'>
              Discover opportunities and start earning
            </p>
          </div>

          {/* Opportunity Types */}
          <div className='border-b border-gray-200'>
            <div className='grid grid-cols-4'>
              {["bounties", "grants", "jobs", "hackathons"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 px-4 py-2 text-sm font-medium ${
                    activeTab === tab
                      ? "border-[#4DA2FF] text-[#4DA2FF]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Opportunities List */}
          <div className='flex flex-col gap-4 space-y-4'>
            {opportunities.map((opportunity) => (
              <Link to={`/job/${opportunity.id}`} key={opportunity.id}>
                <div className='rounded-lg border border-gray-200 p-4 hover:shadow-md'>
                  <div className='flex items-start gap-4'>
                    <div className='rounded-lg bg-gray-100 p-2'>
                      {opportunity.icon}
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold'>{opportunity.title}</h3>
                      <p className='text-sm text-gray-500'>
                        {opportunity.company}
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <svg
                        className='h-4 w-4 text-[#4DA2FF]'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                      >
                        <circle cx='12' cy='12' r='10' />
                        <path d='M12 2v20' />
                      </svg>
                      <span className='font-medium'>{opportunity.reward}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className='space-y-8'>
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
