import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MainLayout } from './layout/main-layout';
import { Shop } from './pages/shop';
import { CartPage } from './pages/cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Shop />} />
            <Route path='cart' element={<CartPage />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
