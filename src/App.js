import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './components/NotFoundBlock';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

// https://64b59113f3dbab5a95c77af8.mockapi.io/items
function App() {
  //стейт для поиска по пиццам
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
