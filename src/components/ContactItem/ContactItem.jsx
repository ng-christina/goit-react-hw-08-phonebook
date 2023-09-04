import style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/operations';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleSave = () => {
    setShowModal(false);
    dispatch(editContact({ id: contact.id, name: newName, number: newNumber }));
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <li className={style.item}>
      <span className={style.itemName}>{contact.name}</span>
      <span className={style.itemNumber} href={`tel:${contact.number}`}>
        {contact.number}
      </span>
      <button className={style.btnDelete} onClick={handleDelete}></button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <label>New Name:</label>
            <input
              type="text"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />

            <label>New Number:</label>
            <input
              type="text"
              value={newNumber}
              onChange={e => setNewNumber(e.target.value)}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Phone number format could be: +1 555 1234567 or 555 1234567."
              required
            />

            <button key="save" onClick={handleSave}>
              Save
            </button>
            <button key="cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
