import { useDispatch, useSelector } from 'react-redux';
import style from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import Loader from 'components/Loader/Loader';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import { selectFilter, selectError, selectIsLoading } from 'redux/selector';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error ? (
        <Loader />
      ) : filteredContacts.length === 0 && !error ? (
        <p className={style.p}>Add your first number in phonebook</p>
      ) : (
        <ul className={style.conList}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} contact={{ id, name, number }} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
