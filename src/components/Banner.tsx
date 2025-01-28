import React from "react";
import { useLogin } from "../context/LoginContext";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const Banner: React.FC = () => {
  const socialProfiles = [
    "/assets/freelancer2.jpg", // Replace with real URLs of profile pics
    "/assets/bounty2.jpg",
    "/assets/freelancer1.jpg",
    "/assets/bounty1.jpg",
  ];

  const { openModal } = useLogin();

  return (
    <div
      className='relative bg-gradient-to-tr from-[#4DA2FF] to-transparent h-72 flex items-end rounded-xl text-white'
      style={{
        backgroundImage: `url('/assets/hero.jpg')`, // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Gradient */}
      <div className='absolute inset-0 bg-gradient-to-tr from-[#4DA2FF]/80 to-transparent rounded-xl' />

      {/* Content */}
      <div className='relative flex flex-col gap-2 ml-8 mb-4 max-w-md'>
        <h1 className='text-3xl md:text-4xl font-bold'>
          The Ultimate Freelance Platform
        </h1>
        <p className=' text-base md:text-lg'>
          Built on the Sui blockchain, connecting talent with opportunity in a
          decentralized world.
        </p>
        <div>
          <SignedIn>
            {""}
          </SignedIn>
          <SignedOut>
          <button
            onClick={() => openModal()}
            className='flex rounded-lg bg-white text-[#4DA2FF] font-medium px-6 py-2 shadow-md hover:bg-[#4DA2FF] hover:text-white transition duration-300'
          >
            Sign Up
          </button>
          </SignedOut>
        </div>

        {/* Social Profiles */}
        <div className='flex items-center gap-5  -space-x-4'>
          {socialProfiles.map((profile, index) => (
            <img
              key={index}
              src={profile}
              alt={`Social Profile ${index + 1}`}
              className='w-10 h-10 rounded-full border-2 border-white'
            />
          ))}
          Join 60,980+ others
        </div>
      </div>
    </div>
  );
};

export default Banner;
