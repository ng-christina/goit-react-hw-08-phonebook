import React from 'react';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import style from './Contact.module.css';

const ContactPage = () => {
  document.title = 'Phonebook';

  return (
    <>
      <div className={style.div}>
        <h1 className={style.title}>Phonebook</h1>
      </div>
      <Form />
      <h1 className={style.title}>Contacts</h1>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactPage;
