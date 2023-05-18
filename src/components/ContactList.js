import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ContactList.styled';

const ContactList = ({ searchContacts, contacts, filter }) => {

  const deleteContact = (contact) => {
    const index = contacts.indexOf(contact);
    contacts.splice(index, 1).map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button onClick={() => deleteContact(contact)}>Delete</button>
      </li>
    ));
  };

  return (
    <ul>
      {filter
        ? searchContacts(contacts, filter).map(contact => (
            <ListItem key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => deleteContact(contact)}>Delete</button>
            </ListItem>
          ))
        : contacts.map(contact => (
            <ListItem key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => deleteContact(contact)}>Delete</button>
            </ListItem>
          ))}
    </ul>
  );
};

ContactList.propTypes = {
  searchContacts: PropTypes.func,
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default ContactList;
