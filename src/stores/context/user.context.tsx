import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener
} from '../../utils/firebase/firebase.utils';
import { createContext, useEffect, useState } from 'react';

// actual value that needs to be accessed
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //centralize sign in + sign out logic
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
