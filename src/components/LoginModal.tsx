// import { GoogleLogin } from "@react-oauth/google";
// import { CredentialResponse } from "@react-oauth/google"; // Explicit type for the response
// import { useState } from "react";
// import { useLogin } from "../context/LoginContext";
// import { ChevronLeft, X } from "lucide-react";
// import { jwtDecode } from "jwt-decode";
import { SignIn } from "@clerk/clerk-react";

const LoginModal = () => {
  // const [isEmailStep, setIsEmailStep] = useState(false);
  // const { closeModal, login } = useLogin();

  // interface DecodedToken {
  //   given_name: string;
  //   picture: string;
  // }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative'>
        {/* Header with Close or Back Button */}
        <div className='flex items-center justify-between mb-6'>
          <SignIn />
          {/* {isEmailStep ? (
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
          )} */}
        </div>

        {/* Modal Content */}
       
      </div>
    </div>
  );
};

export default LoginModal;
