import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Cart from './pages/Cart';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:category' element={<ProductList />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route
        path='/login'
        element={user ? <Navigate to='/' replace /> : <LoginPage />}
      />
      <Route path='/success' element={<Success />} />
    </Routes>
  );

  // return <Home />;
  // return <ProductList />;
  // return ;
  // return ;
  // return ;
  // return ;
}

export default App;
