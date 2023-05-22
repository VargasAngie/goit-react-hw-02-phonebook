import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

class App extends Component {
  state = INITIAL_STATE;

  nameId = nanoid();

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, contacts, number } = this.state;
    let contactsArr = [...contacts];
    const newContact = { id: nanoid(), name: name, number: number };
    contacts.some(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : (contactsArr = [...contacts, newContact]);
    this.setState({ contacts: contactsArr, name: '', number: '' });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  searchContacts = (contacts, filter) =>
    contacts.filter(
      contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    );

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
    const { filter, contacts } = this.state;
    this.searchContacts(contacts, filter);
    this.setState({ INITIAL_STATE });
  };

  deleteContact = (contact) => {
    const { contacts } = this.state;
    console.log(contact);
    const index = contacts.indexOf(contact);
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { name, contacts, number, filter } = this.state;

    return (
      <div>
        <section>
          <h2>Phonebook</h2>
          <ContactForm
            handleSubmit={this.handleSubmit}
            nameId={this.nameId}
            name={name}
            number={number}
            handleChange={this.handleChange}
          ></ContactForm>
        </section>

        <section>
          <h2>Contacts</h2>
          <Filter filter={filter} handleFilter={this.handleFilter}></Filter>
          <ContactList
            searchContacts={this.searchContacts}
            contacts={contacts}
            filter={filter}
            deleteContact={this.deleteContact}
          ></ContactList>
        </section>
      </div>
    );
  }
}

export { App };
