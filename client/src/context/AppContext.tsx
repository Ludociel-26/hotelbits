import axios from "axios";
import { createContext, useState, ReactNode, useEffect } from "react";
import { toast } from "react-toastify";

// Definir el tipo de contexto
interface AppContextType {
  backendUrl: string;
  isLoggedin: boolean;
  setIsLoggedin: (value: boolean) => void;
  userData: { id: string; name: string; email: string } | null;
  setUserData: (value: { id: string; name: string; email: string } | null) => void;
}

// Crear el contexto con un valor por defecto
export const AppContent = createContext<AppContextType | undefined>(undefined);

// Definir el tipo de props para el proveedor
interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {

  axios.defaults.withCredentials = true;

  const backendUrl = import.meta.env.VITE_BACKEND_URL as string; // Asegurar que es string
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const [userData, setUserData] = useState<{ id: string; name: string; email: string } | null>(null);

  const getAuthState = async () => {
    try {
      const {data} = await axios.get(backendUrl + '/api/auth/is-auth')
      if (data.success) {
        setIsLoggedin(true)
        getUserData()
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/data');
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  const value: AppContextType = {
    backendUrl,
    isLoggedin, setIsLoggedin,
    userData, setUserData,
    getUserData
  };

  return (
    <AppContent.Provider value={value}>
      {children}
    </AppContent.Provider>
  );
};
