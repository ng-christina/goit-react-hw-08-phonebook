import style from './ContactItem.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/operations';
import { BsTrash3 } from 'react-icons/bs';
import { Modal, Input, Button, message, Popconfirm } from 'antd';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const confirm = e => {
    handleDelete(e.target.value);
    message.success('Click on Yes');
  };

  const cancel = e => {
    message.error('Click on No');
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    setShowModal(false);
    dispatch(editContact({ id: contact.id, name: newName, number: newNumber }));
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
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
      <button className={style.btnDelete} onClick={handleEdit}>
        ooo
      </button>
      <Popconfirm
        title="Delete the contact"
        description="Are you sure to delete this contact?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      />
      <Modal
        open={showModal}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <div className="modal-content">
          <label>New Name:</label>
          <Input
            type="text"
            value={newName}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          
          <label>New Number:</label>
          <Input
            type="text"
            value={newNumber}
            onChange={handleNumberChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number format could be: +1 555 1234567 or 555 1234567."
            required
          />
        </div>
      </Modal>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
