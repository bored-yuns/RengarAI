import { ReactNode, createContext, useEffect } from "react";

import { User } from "firebase/auth";
import { firebaseClientAuth } from "@/libs/firebase";
import { useAppSelector } from "@/hooks/useRedux";
import useAuth from "@/hooks/useAuth";

interface UserContextType {
  user: User | null;
}

export const UserContext = createContext<UserContextType>({ user: null });

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const { saveStore } = useAuth();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn === false) {
      firebaseClientAuth.onAuthStateChanged((user) => {
        saveStore(user);
      });
    }
  }, []);

  return <>{children}</>;
};

export default UserProvider;
