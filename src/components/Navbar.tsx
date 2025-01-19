import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className='border-b border-gray-200'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4'>
        <div className='flex items-center gap-6'>
          <Link to='/' className='flex items-center gap-2'>
            <div className='rounded-full bg-white border border-[#4DA2FF] p-1'>
              <img
                src='/src/assets/sui-sym.jpg'
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
              to='/sponsorship'
              className='text-sm font-medium text-gray-700 hover:text-gray-900'
            >
              Sponsorship
            </Link>
          </nav>
        </div>
        <button className='rounded-lg bg-[#4DA2FF] px-4 py-2 text-sm font-medium text-white hover:bg-blue-700'>
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
