import React from 'react';
import styles from './search.module.scss';
import search from '../../assets/img/search.svg';

const Search = () => {
  return (
    <div className={styles.root}>
      <img className={styles.search} alt="search" src={search} />
      <input className={styles.input} placeholder="Поиск пиццы..." />
    </div>
  );
};

export default Search;
