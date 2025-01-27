import { Link } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import { SignedIn, SignOutButton, SignedOut, useUser } from "@clerk/clerk-react";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const { isModalOpen, openModal } = useLogin();
  const { user } = useUser();

  return (
    <header className="sticky top-0 left-0 z-10 bg-white border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-white border border-[#4DA2FF] p-1">
              <img
                src="/assets/sui-sym.jpg"
                alt="Sui logo"
                width={25}
                height={25}
              />
            </div>
            <span className="font-bold">Suilance</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/news"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              News
            </Link>
            <Link
              to="/new/sponsor"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Sponsorship
            </Link>
          </nav>
        </div>

        {/* Authentication Section */}
        <div className="flex items-center gap-4">
         <SignedIn>
              <img
                src={user?.imageUrl || "/default-avatar.jpg"}
                alt={`Profile picture of ${user?.firstName || "User"}`}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-black font-medium">
                {user?.firstName || "User"}
              </span>
              <SignOutButton>
              <button
                className="rounded-lg bg-[#4DA2FF] px-6 py-2 font-medium text-white hover:bg-white hover:text-[#4DA2FF] transition duration-300"
              >
                Log Out
              </button>
              </SignOutButton>
          </SignedIn>
          <SignedOut>
            <div className="flex gap-5">
              <button
                onClick={openModal}
                className="rounded-lg bg-[#4DA2FF] px-6 py-2 font-medium text-white hover:bg-white hover:text-[#4DA2FF] transition duration-300"
              >
                Log In
              </button>
              <button
                onClick={openModal}
                className="rounded-lg hidden md:flex bg-white text-[#4DA2FF] font-medium px-6 py-2 shadow-md hover:bg-[#4DA2FF] hover:text-white transition duration-300"
              >
                Sign Up
              </button>
            </div>
            </SignedOut>
        </div>
      </div>

      {/* Login Modal */}
      {isModalOpen && <LoginModal />}
    </header>
  );
};

export default Navbar;
