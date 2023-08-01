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
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  console.log('тeст', sortType.sortProperty);

  //ВАЖНО! почему проверка > 0? Потому что 0 - это первый
  //элемент массива с катеориями, то есть "Все". Нам не нужно как-то сортировать
  //пиццы во вкладке все, поэтому пропускам 0 и сортируем все что больше
  React.useEffect(() => {
    //вынесено в отдельную переменную чтобы не засорять код
    //Вырезаем минус, потому что в запросе его быть не должно
    //Но при проверке минус используем, чтобы идентифицировать нужную сортировку
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    setIsLoading(true);
    fetch(
      `https://64b59113f3dbab5a95c77af8.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzasArray(arr);
        setIsLoading(false);
      });

    //при первом рендере сделай скролл
    //вверх на главной странице
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            activeIndexCategory={categoryId}
            onClickCategory={(id) => setCategoryId(id)}
          />
          <Sort value={sortType} onClickSort={(id) => setSortType(id)} />
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
