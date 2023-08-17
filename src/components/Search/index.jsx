import React from 'react';
import styles from './search.module.scss';
import search from '../../assets/img/search.svg';
import clear from '../../assets/img/close.svg';
import { SearchContext } from '../../contexts/SearchContext';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const changeInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.search} alt="search" src={search} />
      <input
        value={searchValue}
        onChange={changeInputValue}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />

      {searchValue ? (
        <img
          className={styles.clear}
          alt="search"
          src={clear}
          onClick={() => setSearchValue('')}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Search;
