import { Helmet, HelmetProvider } from 'react-helmet-async';
import FormRegister from 'components/FormRegist/FormRegist';
import style from '../ContactPage/Contact.module.css';

const Register = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title className={style.title}>Registration</title>
        </Helmet>
        <FormRegister />
      </div>
    </HelmetProvider>
  );
};

export default Register;
