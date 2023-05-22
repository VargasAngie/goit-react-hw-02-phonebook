import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ContactList.styled';

const ContactList = ({ searchContacts, contacts, filter, deleteContact }) => {

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
