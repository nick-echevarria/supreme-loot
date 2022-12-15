import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';

const Shop: React.FC = () => {
  return <h2>This is the shop component!</h2>;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
