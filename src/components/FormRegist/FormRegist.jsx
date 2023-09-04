import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
      </div>

      <div>
        <label htmlFor="confirm">Confirm Password</label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          value={formData.confirm}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <button type="submit" disabled={isLoading}>
          Register
        </button>
      </div>

      {error && <p>{error}</p>}
    </form>
  );
};

export default FormRegister;
