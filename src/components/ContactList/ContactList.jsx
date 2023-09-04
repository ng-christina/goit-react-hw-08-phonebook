import { useDispatch, useSelector } from 'react-redux';
import style from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import Loader from 'components/Loader/Loader';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
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
      ) : (
        <ul className={style.conList}>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} contact={{ id, name, number }} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
