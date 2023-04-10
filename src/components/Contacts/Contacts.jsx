import React from 'react';
import PropTypes from 'prop-types';
import { Contact, Ul } from './Contacts.styled';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <Ul>
    {contacts.map(contact => {
      return <Contact key={contact.id}>{contact.name}: {contact.number}
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </Contact>
    })}
  </Ul>
  )
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
}
