import style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ApiContacts';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={style.item} key={contact.id}>
      <span className={style.itemName}>{contact.name}</span>
      <span className={style.itemNumber}>{contact.number}</span>
      <button className={style.btnDelete} type="button" onClick={handleDelete}>
        x
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
