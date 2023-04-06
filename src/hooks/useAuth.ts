import { AuthState, authSlice } from "@/stores/reducers/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { firebaseClientAuth } from "@/libs/firebase";
import { useAppDispatch } from "./useRedux";
import { useRouter } from "next/router";

const useAuth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // internal data store handler
  const saveStore = (user: any) => {
    const authState: AuthState = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      avatarURL: user.photoURL,
      accessToken: user.stsTokenManager.accessToken,
      refresthToken: user.stsTokenManager.refreshToken,
    };
    dispatch(authSlice.actions.setAuthState(authState));
  };

  // google login handler
  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseClientAuth, provider)
      .then((res) => {
        saveStore(res.user);
        router.push("/demo");
      })
      .catch((err) => {
        // render failure modal here
        console.log("error");
        console.log(err);
      });
  };

  // firebase global logout handler
  const signOut = () => {
    firebaseClientAuth.signOut();
    dispatch(authSlice.actions.resetAuthState());
    router.push("/demo/auth");
  };

  return {
    saveStore,
    signInGoogle,
    signOut,
  };
};

export default useAuth;
