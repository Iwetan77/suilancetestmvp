import { Link } from "react-router";
import { useLogin } from "../context/LoginContext";
import LoginModal from "./LoginModal";
import { googleLogout } from "@react-oauth/google";

const Navbar = () => {
  const { user, isLoggedIn, logout, isModalOpen, openModal } = useLogin();

  const handleLogoutSuccess = () => {
    googleLogout();
    logout();
  };

  return (
    <header className='sticky top-0 left-0 z-10 bg-white border-b border-gray-200'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4'>
        <div className='flex items-center gap-6'>
          <Link to='/' className='flex items-center gap-2'>
            <div className='rounded-full bg-white border border-[#4DA2FF] p-1'>
              <img
                src='/assets/sui-sym.jpg'
                alt='sui-logo'
                width={25}
                height={25}
              />
            </div>
            <span className='font-bold'>Suilance</span>
          </Link>
          <nav className='md:flex items-center gap-6 hidden'>
            <Link
              to='/'
              className='text-sm font-medium text-gray-700 hover:text-gray-900'
            >
              Home
            </Link>
            <Link
              to='/news'
              className='text-sm font-medium text-gray-700 hover:text-gray-900'
            >
              News
            </Link>
            <Link
              to='/new/sponsor'
              className='text-sm font-medium text-gray-700 hover:text-gray-900'
            >
              Sponsorship
            </Link>
          </nav>
        </div>

        {isLoggedIn ? (
          <div className='flex items-center gap-4'>
            <img
              src={user?.picture || "/default-avatar.jpg"}
              alt='Profile'
              className='w-8 h-8 rounded-full'
            />
            <span className='text-sm font-medium'>{user?.name}</span>
            <button
              onClick={handleLogoutSuccess}
              className='rounded-lg bg-[#4DA2FF] px-6 py-2 font-medium text-white hover:bg-white hover:text-[#4DA2FF] transition duration-300'
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className='flex gap-5'>
            <button
              onClick={() => openModal()}
              className='rounded-lg bg-[#4DA2FF] px-6 py-2 font-medium text-white hover:bg-white hover:text-[#4DA2FF] transition duration-300'
            >
              Log In
            </button>
            <button
              onClick={() => openModal()}
              className='rounded-lg hidden md:flex bg-white text-[#4DA2FF] font-medium px-6 py-2 shadow-md hover:bg-[#4DA2FF] hover:text-white transition duration-300'
            >
              Sign Up
            </button>
          </div>
        )}
      </div>

      {/* Login Modal */}
      {isModalOpen && <LoginModal />}
    </header>
  );
};

export default Navbar;
