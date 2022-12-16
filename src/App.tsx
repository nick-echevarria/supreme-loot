import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import LogIn from './routes/auth/log-in';
import Navigation from './routes/navigation/navigation';
import SignUpForm from './components/sign-up-form/sign-up-form';

const Shop: React.FC = () => {
  return <h2>This is the shop component!</h2>;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="log-in" element={<LogIn />} />
        <Route path="sign-up" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};

export default App;
