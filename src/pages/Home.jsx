import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [pizzasArray, setPizzasArray] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  //Подняли стейт
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://64b59113f3dbab5a95c77af8.mockapi.io/items?category=' +
        categoryId,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        console.log(arr);
        setPizzasArray(arr);
        setIsLoading(false);
      });

    //при первом рендере сделай скролл
    //вверх на главной странице
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            activeIndexCategory={categoryId}
            onClickCategory={(id) => setCategoryId(id)}
          />
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
    </>
  );
};

export default Home;
