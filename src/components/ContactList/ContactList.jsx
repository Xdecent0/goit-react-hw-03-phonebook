import React from 'react';
import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ filterContacts, onDeleteContact }) => {
  return (
    <ul>
      {filterContacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => onDeleteContact(contact.id)}
              className={css.deleteButton}
            >
              {' '}
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
