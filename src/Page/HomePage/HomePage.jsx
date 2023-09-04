import React, { useEffect } from 'react';
import Animation from '../../img/giphy.gif';
import style from './home.module.css';
import { GoBook } from 'react-icons/go';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className={style.div}>
      <h1 className={style.title}>
        Phonebook{' '}
        <span>
          <GoBook />
        </span>
      </h1>
      <h3 className={style.h}>
        Forget About Notes and Stress. We'll Find Them All for You!
      </h3>
      <img alt="animation" width="40%" srcSet={Animation} />
    </div>
  );
};

export default Home;
