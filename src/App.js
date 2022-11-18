import React, { Component } from 'react';
import Container from './components/Container/Container';
import Phonebook from './components/Phonebook';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';

class App extends Component {
  state = {
    contacts: [],
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
    const { contacts } = this.state;
    return (
      <Container>
        <Phonebook title="Phonebook">
          <ContactForm
            onAdd={this.handleAddContact}
            onCheckforUniqName={this.handlerUniqName}
          />
          <Contacts
            title="Contacts"
            contacts={contacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Phonebook>
      </Container>
    );
  }
}

export default App;
