import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
//import pizzasArray from './assets/pizzas.json';

// https://64b59113f3dbab5a95c77af8.mockapi.io/items
function App() {
  const [pizzasArray, setPizzasArray] = React.useState([]);

  React.useEffect(() => {
    fetch('https://64b59113f3dbab5a95c77af8.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        console.log(arr);
        setPizzasArray(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzasArray.map((card) => (
              //вместо переписывания всех пропсов ДЛЯ КРАСОТЫ И ЧИСТОТЫ кода
              //передаю все не колбасой пропсов, а спредом ...
              <PizzaBlock key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
