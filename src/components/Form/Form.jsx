import style from './Form.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: name,
      number: number,
    };

    const isContactExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExist) {
      toast.error(`${name} is already in contacts!`);
      return;
    }

    const isNumberExist = contacts.find(
      ({ number }) =>
        contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (isNumberExist) {
      toast.error(`${number} is already in contacts!`);
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.label}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleNameChange}
        value={name}
        className={style.input}
      />
      <label className={style.label}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleNumberChange}
        value={number}
        className={style.input}
      />
      <button className={style.button} type="submit">
        ADD CONTACT
      </button>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            borderRadius: '20px',
            padding: '16px',
            color: '#b83b5e',
          },
        }}
      />
    </form>
  );
};

export default Form;
