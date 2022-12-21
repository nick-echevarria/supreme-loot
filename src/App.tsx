import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener
} from './utils/firebase/firebase.utils';

import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication';
import Navigation from './routes/navigation/navigation';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';
import { setCurrentUser } from './stores/redux/user/user.actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
