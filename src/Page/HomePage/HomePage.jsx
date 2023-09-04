import React, { useEffect } from 'react';
import style from '../ContactPage/Contact.module.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div>
      <h1 className={style.title}>Phonebook</h1>
    </div>
  );
};

export default Home;
