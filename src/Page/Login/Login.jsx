import React from 'react';
import LoginF from 'components/LoginF/LoginF';
import style from '../ContactPage/Contact.module.css';

const Login = () => {
  React.useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div className={style.div}>
      <h1 className={style.title}>Login</h1>
      <LoginF />
    </div>
  );
};

export default Login;
