import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { useState } from 'react';
import style from './form.module.css';
import { FcApproval } from 'react-icons/fc';

const FormRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const { isLoading, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password, confirm } = formData;

    if (password === confirm) {
      dispatch(register({ name, email, password }));
    }
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
        />
        <label className={style.label} htmlFor="email">
          E-mail
        </label>
      </div>

      <div className={style.div}>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
          className={style.input}
        />{' '}
        <label className={style.label} htmlFor="password">
          Password
        </label>
      </div>

      <div className={style.div}>
        <input
          type="password"
          id="confirm"
          name="confirm"
          value={formData.confirm}
          onChange={handleChange}
          autoComplete="new-password"
          required
          className={style.input}
        />
        <label className={style.label} htmlFor="confirm">
          Confirm Password
        </label>
      </div>

      <div className={style.div}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={style.input}
        />
        <label className={style.label} htmlFor="name">
          Name
        </label>
      </div>

      <div>
        <button className={style.button} type="submit" disabled={isLoading}>
          Register <FcApproval className={style.svg} />
        </button>
      </div>
      {error && <p>{error}</p>}
      
    </form>
  );
};

export default FormRegister;
