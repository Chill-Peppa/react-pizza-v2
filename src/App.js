import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './components/NotFoundBlock';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import { SearchContext } from './contexts/SearchContext';

function App() {
  //стейт для поиска по пиццам
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
