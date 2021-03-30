import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleContactInfo = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = { id: uuidv4(), name, number };
    this.props.onSubmit(newContact);

    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.submitForm}>
        <label htmlFor="name" className={s.label}>
          Name
          <input
            placeholder="Ivan Ivanov"
            className={s.formInput}
            onChange={this.handleContactInfo}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            name="name"
            value={name}
            type="text"
          />
        </label>
        <label className={s.label}>
          Number
          <input
           placeholder="09755555555"
            required
            onChange={this.handleContactInfo}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            htmlFor="number"
            className={s.formInput}
            name="number"
            type="tel"
          />
        </label>
        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
