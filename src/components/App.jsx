import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactsList from './Contacts/Contacts';
import { FindNumberByName } from './Find/FindNumberByName';
import { Form } from './Form/Form';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  const submitFormHandle = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(state => [...state, newContact]);
    }
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = contactId => {
    console.log(contactId);
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={submitFormHandle} />
      <h2>Contacts</h2>
      <FindNumberByName value={filter} onChange={filterChange} />
      <ContactsList
        contacts={getVisibleContacts()}
        onDelete={onDeleteContact}
      />
    </div>
  );
};

App.propTypes = {
  newContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
