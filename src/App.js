import React, { Component } from 'react';
import Container from './components/Container/Container';
import Phonebook from './components/Phonebook';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts } = this.props;
    const { filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleAddContact = newContact => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts, newContact] });
  };

  handlerUniqName = name => {
    const { contacts } = this.state;
    const uniqName = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (uniqName) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  };

  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const { onDeleteContact } = this.props;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <Phonebook title="Phonebook">
          <ContactForm
            onAdd={this.handleAddContact}
            onCheckforUniqName={this.handlerUniqName}
          />
        </Phonebook>
      </Container>
    );
  }
}

export default App;
