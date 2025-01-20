import React from "react";

const JobDetails: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='p-4'>
        <div className='max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
          {/* Header Section */}
          <div className='flex items-center justify-between bg-blue-50 p-4'>
            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
              <div>
                <h1 className='text-xl font-bold text-gray-800'>
                  Illustrator for Blockchain Startup
                </h1>
                <p className='text-sm text-gray-500'>by SuiLabs</p>
              </div>
            </div>
            <div>
              <p className='text-green-600 font-medium'>Submissions Open</p>
              <p className='text-sm text-gray-500'>Global</p>
            </div>
          </div>

          {/* Main Section */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
            {/* Left Panel */}
            <div className='space-y-4'>
              <div className='p-4 bg-blue-50 rounded-lg border border-blue-200'>
                <p className='text-gray-700 font-semibold'>Payment</p>
                <h2 className='flex items-center gap-3 text-2xl font-bold text-gray-800'>
                  750-1.25k{" "}
                  <img
                    src='/src/assets/usd-coin-usdc-logo.png'
                    alt='Coin'
                    className='h-5 w-5'
                  />
                </h2>
              </div>
              <div className='p-4 bg-blue-50 rounded-lg border border-blue-200'>
                <p className='text-gray-700 font-semibold'>Applications</p>
                <h2 className='text-2xl font-bold text-gray-800'>0-10</h2>
              </div>
              <div className='p-4 bg-blue-50 rounded-lg border border-blue-200'>
                <p className='text-gray-700 font-semibold'>Remaining Time</p>
                <h2 className='text-2xl font-bold text-gray-800'>1d:9h:6m</h2>
              </div>
              <button className='w-full bg-[#4DA2FF] text-white py-3 rounded-lg font-semibold hover:bg-blue-700'>
                Submit Application
              </button>
              <p className='text-sm text-gray-500 bg-green-100 border-t p-4'>
                ⚠️ Don’t start working just yet! Apply first, and then begin
                working only once you’ve been hired for the project.
              </p>
            </div>

            {/* Middle Panel */}
            <div className='col-span-2 space-y-6'>
              <div>
                <h2 className='text-xl font-bold text-gray-800'>Details</h2>
                <p className='text-gray-600 mt-2'>
                  SuiLabs is a blockchain-based startup building tools to
                  empower freelancers and clients on the Sui blockchain. Our
                  goal is to decentralize and simplify the freelance economy,
                  offering secure and fast transactions with minimal fees.
                </p>
                <p className='text-gray-600 mt-2'>
                  We are seeking an illustrator to create engaging visuals for
                  our platform. You will collaborate with our design team to
                  craft high-quality illustrations that align with our brand’s
                  mission and aesthetic.
                </p>
                <p className='text-gray-600 mt-2'>
                  If you are passionate about blockchain technology, have a
                  creative edge, and enjoy working on meaningful projects, we
                  would love to hear from you.
                </p>
              </div>

              <div className='border-t pt-4'>
                <h2 className='text-xl font-bold text-gray-800'>
                  What We're Looking For
                </h2>
                <ul className='list-disc list-inside text-gray-600 mt-2'>
                  <li>
                    Experience with digital illustration tools like Adobe
                    Illustrator or Figma.
                  </li>
                  <li>Understanding of blockchain concepts is a plus.</li>
                  <li>
                    Ability to meet tight deadlines and collaborate effectively.
                  </li>
                  <li>A portfolio showcasing your illustration skills.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
//
