import React, { useState, ChangeEvent } from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { ConnectButton } from "@suiet/wallet-kit";
// import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

const CreateSponsorPage: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const file = e.target.files?.[0] || null;
    setter(file);
  };

  return (
    <div>
          <SignedIn>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to Suilance Earn
          </h1>
          <p className="text-gray-600">
            Let’s start with some basic information about your team
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8">
          {/* About You Section */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">About You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-base font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA2FF] focus:ring-[#4DA2FF] text-lg py-3 px-4"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA2FF] focus:ring-[#4DA2FF] text-lg py-3 px-4"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">
                Username *
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA2FF] focus:ring-[#4DA2FF] text-lg py-3 px-4"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">
                Profile Picture *
              </label>
              <div
                className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center cursor-pointer hover:border-[#4DA2FF]"
                onClick={() =>
                  document.getElementById("profilePicture")?.click()
                }
              >
                {profilePicture ? (
                  <p className="text-base text-gray-700">{profilePicture.name}</p>
                ) : (
                  <p className="text-base text-gray-500">
                    Choose or drag and drop media
                  </p>
                )}
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, setProfilePicture)}
                />
              </div>
            </div>
          </div>

          {/* About Your Company Section */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            About Your Company
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-base font-medium text-gray-700">
                Company Name *
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA2FF] focus:ring-[#4DA2FF] text-lg py-3 px-4"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">
                Company Username *
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA2FF] focus:ring-[#4DA2FF] text-lg py-3 px-4"
                placeholder="Company Username"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">
                Company URL
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA2FF] focus:ring-[#4DA2FF] text-lg py-3 px-4"
                placeholder="https://example.com"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">
                Company Twitter
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA2FF] focus:ring-[#4DA2FF] text-lg py-3 px-4"
                placeholder="@username"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-base font-medium text-gray-700">
              Company Logo *
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center cursor-pointer hover:border-[#4DA2FF]"
              onClick={() => document.getElementById("companyLogo")?.click()}
            >
              {companyLogo ? (
                <p className="text-base text-gray-700">{companyLogo.name}</p>
              ) : (
                <p className="text-base text-gray-500">
                  Choose or drag and drop media
                </p>
              )}
              <input
                type="file"
                id="companyLogo"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e, setCompanyLogo)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-base font-medium text-gray-700">
              Industry *
            </label>
            <select className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA2FF] focus:ring-[#4DA2FF] text-lg py-3 px-4">
              <option value="">Select...</option>
              <option value="tech">Tech</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-base font-medium text-gray-700">
              Company Short Bio *
            </label>
            <textarea
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA2FF] focus:ring-[#4DA2FF] text-lg py-3 px-4"
              placeholder="What does your company do?"
              maxLength={180}
            ></textarea>
          </div>

          {/* Submit Button */}
          <ConnectButton>Connect Wallet</ConnectButton>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-gray-500 text-sm">
          <p>© 2025 Suilance. All rights reserved.</p>
        </footer>
      </div>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
    </div>

  );
};

export default CreateSponsorPage;
