import style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { BsTrash3 } from 'react-icons/bs';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={style.item}>
      <span className={style.itemName}>{contact.name}</span>
      <span className={style.itemNumber} href={`tel:${contact.number}`}>
        {contact.number}
      </span>

      <button className={style.btnDelete} onClick={handleDelete}>
        <BsTrash3 />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
