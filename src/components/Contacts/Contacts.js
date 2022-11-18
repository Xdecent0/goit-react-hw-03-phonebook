import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import Filter from '../Filter';

export class Contacts extends Component {
  state = {
    filter: '',
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts } = this.props;
    const { filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const { title, onDeleteContact } = this.props;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h2 className={s.title}>{title}</h2>
        <Filter filter={filter} onFilter={this.handleFilter} />
        <ul className={s.contactsList}>
          {filteredContacts &&
            filteredContacts.map(({ id, name, tel }) => (
              <li key={id} className={s.contact}>
                <span className={s.name}>{name}</span>
                <span className={s.phone}>{tel}</span>
                <button
                  className={s.btnDeleteContact}
                  type="button"
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

Contacts.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default Contacts;
