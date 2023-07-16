import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzasArray from './assets/pizzas.json';

function App() {
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
              <PizzaBlock {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
