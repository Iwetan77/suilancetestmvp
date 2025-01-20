import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoginContextProps {
  isLoggedIn: boolean;
  isModalOpen: boolean;
  login: () => void;
  logout: () => void;
  openModal: () => void;
  closeModal: () => void;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, isModalOpen, login, logout, closeModal, openModal }}
    >
      {children}
    </LoginContext.Provider>
  );
};

// Custom hook for easier access to the context
export const useLogin = (): LoginContextProps => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
