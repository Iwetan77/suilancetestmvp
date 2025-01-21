import { GoogleLogin } from "@react-oauth/google";
import { CredentialResponse } from "@react-oauth/google"; // Explicit type for the response
import { useState } from "react";
import { useLogin } from "../context/LoginContext";
import { ChevronLeft, X } from "lucide-react";
import { jwtDecode } from "jwt-decode";

const LoginModal = () => {
  const [isEmailStep, setIsEmailStep] = useState(false);
  const { closeModal, login } = useLogin();

  interface DecodedToken {
    given_name: string;
    picture: string;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative'>
        {/* Header with Close or Back Button */}
        <div className='flex items-center justify-between mb-6'>
          {isEmailStep ? (
            <button
              onClick={() => setIsEmailStep(false)}
              className='flex items-center text-gray-500 hover:text-gray-700'
            >
              <ChevronLeft className='w-5 h-5' />
              <span className='ml-1'>Back</span>
            </button>
          ) : (
            <button
              onClick={() => closeModal()}
              className='text-gray-500 hover:text-gray-700'
            >
              <X className='w-5 h-5' />
            </button>
          )}
        </div>

        {/* Modal Content */}
        {!isEmailStep ? (
          <div className='text-center'>
            <div className='mb-4'>
              <h2 className='text-xl font-semibold'>You're one step away</h2>
              <p>From earning in global standards</p>
            </div>
            {/* Google Login Button */}
            <GoogleLogin
              onSuccess={(credentialResponse: CredentialResponse) => {
                // Decode the JWT credential to get user info
                const credential = credentialResponse.credential ?? ""; // Fallback to empty string if undefined
                const decodedToken = jwtDecode<DecodedToken>(credential);

                localStorage.setItem("userName", decodedToken.given_name ?? "");
                localStorage.setItem("userPicture", decodedToken.picture ?? "");

                // Pass user data to context (optional)
                login({
                  name: decodedToken.given_name,
                  picture: decodedToken.picture,
                });
                closeModal();
              }}
              onError={() => {
                console.log("Error logging in");
              }}
              useOneTap
              theme='outline' // Customize the button style
            />
            <div className='flex justify-center items-center mb-4'>
              <div className='w-full h-1 text-gray-700' />
              OR
              <div className='w-full h-1 text-gray-700' />
            </div>
            <button
              onClick={() => setIsEmailStep(true)}
              className='w-full bg-gray-100 text-gray-700 py-2 px-4 mb-4 rounded-md border border-gray-300 hover:bg-gray-200'
            >
              Sign in with Email
            </button>
            <div className='text-sm'>
              By using this website, you agree to our Terms of Use and our
              Privacy Policy.
            </div>
          </div>
        ) : (
          <div className='text-center'>
            <h2 className='text-lg font-semibold mb-4'>Sign in with Email</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Email Submitted");
              }}
              className='space-y-4'
            >
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
                required
              />
              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
              >
                Confirm
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
