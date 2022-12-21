import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { CategoriesProvider } from './stores/context/categories.context';
import { store } from './stores/redux/store';

import './styles/application.scss';
import { CartProvider } from './stores/context/cart.context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
