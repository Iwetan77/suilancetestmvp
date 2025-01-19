import React, { useState } from "react";
import Modal from "./components/Modal";
import { useNavigate } from "react-router";

interface GrantPostProps {
  username: string;
  handle: number;
  avatarUrl: string;
  postText: string;
  grantAmount: number;
  reactions: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const GrantPost: React.FC<GrantPostProps> = ({
  username,
  handle,
  avatarUrl,
  postText,
  // grantAmount,
  reactions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tipAmount, setTipAmount] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (value: string) => {
    setTipAmount(value);
  };

  const handleConfirm = () => {
    alert(`You have tipped ${tipAmount}!`);
    setIsOpen(false);
  };

  const handlePostClick = () => {
    // Navigate to the news/:id route
    navigate(`/news/${handle}`);
  };
  return (
    <div className='max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-4'>
      {/* Header Section */}
      <div className='flex items-center space-x-4'>
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className='w-12 h-12 rounded-full'
        />
        <div>
          <p className='font-semibold'>{username}</p>
          <p className='text-sm text-gray-500'>@{handle}</p>
        </div>
      </div>

      {/* Post Text */}
      <p className='text-gray-700'>{postText}</p>

      {/* Grant Card */}
      <div
        onClick={handlePostClick}
        className='bg-[#4DA2FF] text-white rounded-xl max-w-5xl text-center'
      >
        <img src={avatarUrl} alt={`${username}'s avatar`} className='' />
        {/* <div className='text-3xl font-bold flex justify-center items-center space-x-2'>
          <span>${grantAmount} USDC</span>
          <span role='img' aria-label='celebration'>
            🎉
          </span>
        </div>
        <button className='mt-4 bg-white text-[#4DA2FF] font-medium rounded-full px-6 py-2'>
          GRANT
        </button>
        <p className='mt-4 text-sm text-white/80'>
          Solana Foundation Nigeria Grants
        </p> */}
      </div>

      {/* Reactions */}
      <div className='flex justify-between items-center text-gray-500 text-sm'>
        <div className='flex items-center space-x-2'>
          <span className='cursor-pointer'>❤️ {reactions.likes}</span>
          <span className='cursor-pointer'>💬 {reactions.comments}</span>
          <span className='cursor-pointer' onClick={() => setIsOpen(true)}>
            💲 {reactions.shares}
          </span>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        title='Tip Your Creator'
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
        inputValue={tipAmount}
        onInputChange={handleInputChange}
      >
        <p>Support your favorite creator by tipping them!</p>
      </Modal>
    </div>
  );
};

export default GrantPost;
