import React from 'react';

function Categories({ activeIndexCategory, onClickCategory }) {
  // const [activeIndexCategory, setActiveIndexCategory] = React.useState(0);

  // const onClickCategory = (index) => {
  //   setActiveIndexCategory(index);
  // };

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              onClick={() => onClickCategory(i)}
              key={i}
              className={activeIndexCategory === i ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
