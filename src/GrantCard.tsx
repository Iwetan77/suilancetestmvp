import React from "react";

interface GrantPostProps {
  username: string;
  handle: string;
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
  grantAmount,
  reactions,
}) => {
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
      <div className='bg-[#4DA2FF] text-white rounded-xl p-4 text-center'>
        <div className='text-3xl font-bold flex justify-center items-center space-x-2'>
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
        </p>
      </div>

      {/* Reactions */}
      <div className='flex justify-between items-center text-gray-500 text-sm'>
        <div className='flex items-center space-x-2'>
          <span>❤️ {reactions.likes}</span>
          <span>💬 {reactions.comments}</span>
          <span>💲 {reactions.shares}</span>
        </div>
      </div>
    </div>
  );
};

export default GrantPost;
