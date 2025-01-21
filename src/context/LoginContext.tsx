import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define UserProfile type
interface UserProfile {
  name: string;
  picture: string;
}

// Define the props type for LoginProvider
interface LoginProviderProps {
  children: ReactNode; // children prop to wrap other components
}

interface LoginContextProps {
  isLoggedIn: boolean;
  isModalOpen: boolean;
  user: UserProfile | null;
  login: (user: UserProfile) => void;
  logout: () => void;
  openModal: () => void;
  closeModal: () => void;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);

  // Use useEffect to run once after the component mounts
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedPicture = localStorage.getItem("userPicture");

    if (storedName && storedPicture) {
      setIsLoggedIn(true);
      setUser({ name: storedName, picture: storedPicture });
    }
  }, []); // Empty dependency array ensures this runs once on mount

  const login = (user: UserProfile) => {
    setUser(user);
    setIsLoggedIn(true);
    // Save user info to localStorage
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userPicture", user.picture);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    // Remove user info from localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("userPicture");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        isModalOpen,
        user,
        login,
        logout,
        closeModal,
        openModal,
      }}
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
