import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <h1>404</h1>
      <p>Страница не найдена 😔</p>
      <button onClick={() => navigate(-1)} type="button">
        Назад
      </button>
    </div>
  );
}

export default NotFound;
