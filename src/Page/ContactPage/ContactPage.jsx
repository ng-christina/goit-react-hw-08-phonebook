import { Helmet, HelmetProvider } from 'react-helmet-async';

import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import style from './Contact.module.css';

const ContactPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <h1 className={style.title}>Phonebook</h1>
        </Helmet>
        <Form />
        <h1 className={style.title}>Contacts</h1>
        <Filter />
        <ContactList />
      </HelmetProvider>
    </>
  );
};

export default ContactPage;
