import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm, SubmitBbutton, StyledLabel } from './ContactForm.styled';

const ContactForm = ({ handleSubmit, nameId, name, number, handleChange }) => (
  <StyledForm onSubmit={handleSubmit}>
    <StyledLabel htmlFor={nameId}>
      {'Name'}
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        required
      />
    </StyledLabel>
    <StyledLabel>
      {' Number'}
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
        required
      />
    </StyledLabel>

    <SubmitBbutton type="submit">Add contact</SubmitBbutton>
  </StyledForm>
);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  nameId: PropTypes.any,
  name: PropTypes.string,
  number: PropTypes.string,
  handleChange: PropTypes.func,
};

export default ContactForm;
