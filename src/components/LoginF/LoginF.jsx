import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { useState } from 'react';
import style from './LoginF.module.css';
import { IoEnterOutline } from 'react-icons/io5';

const LoginF = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const { isLoading, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevData => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <form className={style.formReg} onSubmit={handleSubmit}>
      <div className={style.div}>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={style.input}
        />{' '}
        <label className={style.label} htmlFor="email">
          Email
        </label>
      </div>
      <div className={style.div}>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className={style.input}
        />
        <label className={style.label} htmlFor="password">
          Password
        </label>
      </div>
      <div>
        <button className={style.button} type="submit" disabled={isLoading}>
          Log in <IoEnterOutline className={style.svg} />
        </button>
      </div>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginF;
