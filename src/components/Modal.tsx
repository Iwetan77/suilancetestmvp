import React from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  inputValue?: string; // Optional prop for the input value
  onInputChange?: (value: string) => void; // Callback when input changes
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  inputValue = "",
  onInputChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-[#0f0c24] rounded-lg shadow-lg w-full max-w-sm p-8 space-y-6'>
        {/* Title */}
        <h2 className='text-xl font-bold text-white text-center'>{title}</h2>

        {/* Content */}
        <div className='text-center text-gray-50'>{children}</div>

        {/* Input for the tip amount */}
        <div>
          <label
            htmlFor='tipAmount'
            className='block text-sm font-medium text-white text-center'
          >
            Enter Tip Amount:
          </label>
          <div className='mt-2 flex justify-center items-center gap-5'>
            <div className='rounded-full bg-white border border-[#4DA2FF] p-1'>
              <img
                src='/src/assets/sui-sym.jpg'
                alt='sui-logo'
                className='h-6 w-6'
              />
            </div>
            <input
              type='text'
              id='tipAmount'
              value={inputValue}
              onChange={(e) => onInputChange?.(e.target.value)}
              className='p-2 block w-full rounded-md border-gray-300 shadow-sm h-8 focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
              placeholder='eg 0.2 SUI...'
            />
          </div>
        </div>

        {/* Buttons */}
        <div className='flex justify-center space-x-4'>
          <button
            className='px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700'
            onClick={onClose}
          >
            {cancelText}
          </button>
          <button
            className='px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white'
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
