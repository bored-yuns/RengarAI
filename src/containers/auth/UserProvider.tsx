import { ReactNode, createContext, useEffect, useState } from "react";

import Loader from "@/components/common/Loader";
import { User } from "firebase/auth";
import { firebaseClientAuth } from "@/libs/firebase";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";

interface UserContextType {
  user: User | null;
}

export const UserContext = createContext<UserContextType>({ user: null });

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const router = useRouter();
  const { saveStore } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading === false) setIsLoading(true);
    firebaseClientAuth.onAuthStateChanged((user) => {
      if (user) {
        if (router.pathname === "/demo/auth") router.push("/demo");
        saveStore(user);
      } else {
        if (router.pathname === "/demo/auth") return;
        router.push("/demo/auth");
      }
    });
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  if (isLoading === true) return <Loader />;
  return <>{children}</>;
};

export default UserProvider;
