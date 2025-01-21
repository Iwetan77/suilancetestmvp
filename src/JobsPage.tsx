"use client";

import { useState } from "react";
import { Link } from "react-router";
import Banner from "./components/Banner";
import { useLogin } from "./context/LoginContext";

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState("bounties");

  const opportunities = [
    {
      id: 98,
      title: "Frontend Development Task",
      dueIn: 2,
      company: "Company Name",
      reward: "500",
      icon: (
        <img
          src='/assets/bounty1.jpg'
          alt='bounty'
          className='w-16 h-16 rounded-xl'
        />
      ),
    },
    {
      id: 99,
      title: "Backend API Development",
      dueIn: 2,
      company: "Tech Solutions",
      reward: "800",
      icon: (
        <img
          src='/assets/bounty2.jpg'
          alt='bounty'
          className='w-16 h-16 rounded-xl'
        />
      ),
    },
    {
      id: 100,
      title: "UI/UX Design",
      dueIn: 2,
      company: "Creative Minds",
      reward: "600",
      icon: (
        <img
          src='/assets/bounty3.jpg'
          alt='bounty'
          className='w-16 h-16 rounded-xl'
        />
      ),
    },
    {
      id: 101,
      title:
        "Thread Contest: Write a detailed thread about the importance of hopping into Web3 early",
      dueIn: 3,
      company: "Hop",
      reward: "400",
      icon: (
        <img src='/assets/hop.png' alt='hop' className='w-16 h-16 rounded-xl' />
      ),
    },
    {
      id: 102,
      title:
        "Art Contest: Design a creative poster showcasing Cetus and its potential in the Sui ecosystem",
      dueIn: 3,
      company: "Cetus",
      reward: "450",
      icon: (
        <img
          src='/assets/cetus.png'
          alt='cetus'
          className='w-16 h-16 rounded-xl'
        />
      ),
    },
    {
      id: 103,
      title:
        "Thread Contest: Explain why Scallop stands out as a Web3 platform in a captivating thread",
      dueIn: 3,
      company: "Scallop",
      reward: "500",
      icon: (
        <img
          src='/assets/scallop.png'
          alt='scallop'
          className='w-16 h-16 rounded-xl'
        />
      ),
    },
    {
      id: 104,
      title:
        "Art Contest: Create an engaging meme or artwork centered on Walrus in the blockchain space",
      dueIn: 3,
      company: "Walrus",
      reward: "350",
      icon: (
        <img
          src='/assets/walrus.png'
          alt='walrus'
          className='w-16 h-16 rounded-xl'
        />
      ),
    },
    {
      id: 105,
      title:
        "Art Contest: Design a meme using the concept of 'fud' in the crypto world",
      dueIn: 3,
      company: "Fud",
      reward: "300",
      icon: (
        <img src='/assets/fud.png' alt='fud' className='w-16 h-16 rounded-xl' />
      ),
    },
    {
      id: 106,
      title:
        "Thread Contest: Write a thread about the contributions of Studio Mirai to Web3",
      dueIn: 3,
      company: "Studio Mirai",
      reward: "550",
      icon: (
        <img
          src='/assets/studioMirai.png'
          alt='studioMirai'
          className='w-16 h-16 rounded-xl'
        />
      ),
    },
    {
      id: 107,
      title:
        "Art Contest: Create a stunning visual to represent Sui’s future in blockchain",
      dueIn: 3,
      company: "Sui",
      reward: "600",
      icon: (
        <img src='/assets/sui.png' alt='sui' className='w-16 h-16 rounded-xl' />
      ),
    },
    {
      id: 108,
      title:
        "Thread Contest: Highlight how 'Sui On Campus' can revolutionize blockchain education",
      dueIn: 3,
      company: "Sui On Campus",
      reward: "400",
      icon: (
        <img
          src='/assets/suiOnCampus.png'
          alt='suiOnCampus'
          className='w-16 h-16 rounded-xl'
        />
      ),
    },
  ];

  const { isLoggedIn } = useLogin();

  return (
    <div className='min-h-screen bg-white'>
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
          {isLoggedIn ? (
            <div className='rounded-lg bg-[#4DA2FF] p-6'>
              <h1 className='text-2xl font-bold text-white'>Welcome Adrian</h1>
              <p className='text-white/80'>
                Discover opportunities and start earning
              </p>
            </div>
          ) : (
            <Banner />
          )}

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
                    {/* Icon Section */}
                    <div>
                      {opportunity.icon}
                      <div className='md:hidden flex items-center gap-2'>
                        <div className='rounded-full bg-white border border-[#4DA2FF] p-1'>
                          <img
                            src='/assets/usd-coin-usdc-logo.png'
                            alt='Coin'
                            className='h-5 w-5'
                          />
                        </div>
                        <span className='font-medium text-lg'>
                          {opportunity.reward} USDC
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className='flex-1'>
                      {/* Title and Company */}
                      <h3 className='font-semibold text-lg'>
                        {opportunity.title}
                      </h3>
                      <p className='text-sm text-gray-500'>
                        {opportunity.company}
                      </p>

                      {/* Bounty and Due Date */}
                      <div className='mt-2 flex items-center gap-4 text-sm text-gray-500'>
                        <span className='flex items-center gap-1'>
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
                          Bounty
                        </span>
                        <span>|</span>
                        <span>Due in {opportunity.dueIn} days</span>
                      </div>
                    </div>

                    {/* Reward Section */}
                    <div className='hidden md:flex items-center gap-2'>
                      <div className='rounded-full bg-white border border-[#4DA2FF] p-1'>
                        <img
                          src='/assets/usd-coin-usdc-logo.png'
                          alt='Coin'
                          className='h-5 w-5'
                        />
                      </div>
                      <span className='font-medium text-lg'>
                        {opportunity.reward} USDC
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
              <img src='/assets/chest.png' alt='chest' />
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
                    src='/assets/freelancer2.jpg'
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
