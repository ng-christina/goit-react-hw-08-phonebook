import React from 'react';
import FormRegister from 'components/FormRegist/FormRegist';
import style from '../ContactPage/Contact.module.css';

const Register = () => {
  React.useEffect(() => {
    document.title = 'Registration';
  }, []);

  return (
    <div>
      <h1 className={style.title}>Registration</h1>
      <FormRegister />
    </div>
  );
};

export default Register;
