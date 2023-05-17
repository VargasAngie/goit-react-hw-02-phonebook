import React, { Component } from 'react';
import { nanoid } from 'nanoid';

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
    const newContact = { id: nanoid(), name: name, number: number };
    const contactsArr = [...contacts, newContact];
    this.setState({ contacts: contactsArr, name: '', number: '' });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
    const { filter, contacts } = this.state;
    const searchContacts = contacts.filter(
      contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    );
    this.setState({ contacts: searchContacts });
    console.log(searchContacts);
    // this.setState({ INITIAL_STATE });
  };

  render() {
    const { name, contacts, number, filter } = this.state;

    return (
      <div>
        <section>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameId}>
              {'Name'}
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              {' Number'}
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={this.handleChange}
                required
              />
            </label>

            <button type="submit">Add contact</button>
          </form>
        </section>
        <section>
          <h2>Contacts</h2>
          <label>
            {' Find your contacts by name '}
            <input
              type="filter"
              name="filter"
              value={filter}
              onChange={this.handleFilter}
            ></input>
          </label>
          <ul>
            {' '}
            {contacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export { App };
