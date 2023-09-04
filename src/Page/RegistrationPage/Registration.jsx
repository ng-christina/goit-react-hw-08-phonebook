import React from 'react';
import FormRegister from 'components/FormRegist/FormRegist';
import style from './reg.module.css';
import { IoPersonAddOutline } from 'react-icons/io5';

const Register = () => {
  React.useEffect(() => {
    document.title = 'Registration';
  }, []);

  return (
    <div className={style.div}>
      <h1 className={style.title}>
        Registration <IoPersonAddOutline />
      </h1>
      <FormRegister />
    </div>
  );
};

export default Register;
