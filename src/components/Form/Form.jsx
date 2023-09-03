import style from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/ApiContacts';
import { selectContacts } from 'redux/selector';
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const number = formData.get('number');

    if (contacts.some(contact => contact.name === name)) {
      alert(`User with name ${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    e.target.reset();
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
        className={style.input}
      />
      <label className={style.label}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={style.input}
      />
      <button className={style.button} type="submit">
        ADD CONTACT
      </button>
    </form>
  );
};

export default Form;
