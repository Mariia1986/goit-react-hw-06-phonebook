import React, { Component } from "react";

import "./App.css";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { connect } from "react-redux";
import userActions from "./redux/actions/userActions";

class App extends Component {
  onHandleSubmit = (newContact) => {
    // console.log(newContact);

    if (
      this.props.contacts.some(
        (el) => el.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.props.addContact(newContact);
    // this.setState((prevState) => ({
    //   contacts: [...prevState.contacts, newContact],
    // }));
  };

  onClickDelete = (id) => {
    // this.setState((prevState) => ({
    //   contacts: prevState.contacts.filter((el) => el.id !== id),
    // }));
    this.props.deleteCont(id);
  };

  handleFilter = (e) => {
    this.props.filterAct(e.currentTarget.value);
  };

  render() {
    const { contacts, filter } = this.props;
    const normalaizedFilter = filter.toLowerCase();
    const filteredNames = contacts.filter((el) =>
      el.name.toLowerCase().includes(normalaizedFilter)
    );
    return (
      <div className="App">
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.onHandleSubmit} />
        <div>
          <h2>Contacts</h2>
          <Filter filter={filter} search={this.handleFilter} />
          <ContactList
            filteredNames={filteredNames}
            deleteItem={this.onClickDelete}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});
const mapDispatchToProps = {
  addContact: userActions.addContact,
  deleteCont: userActions.deleteContact,
  filterAct: userActions.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
