import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

// https://64b59113f3dbab5a95c77af8.mockapi.io/items
function App() {
  const [pizzasArray, setPizzasArray] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://64b59113f3dbab5a95c77af8.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        //фейковая задержка, чтобы проверить скелетон
        setTimeout(() => {
          console.log(arr);
          setPizzasArray(arr);
          setIsLoading(false);
        }, 2000);
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
            {isLoading
              ? //создаю фейковый массив, чтобы при загрузке скелетон не дергался
                [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : pizzasArray.map((card) => (
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
