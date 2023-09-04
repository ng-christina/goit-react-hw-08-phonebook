import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginF from 'components/LoginF/LoginF';
import style from '../ContactPage/Contact.module.css';

const Login = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title className={style.title}>Login</title>
        </Helmet>
        <LoginF />
      </div>
    </HelmetProvider>
  );
};

export default Login;
