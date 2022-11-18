import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const INITIAL_STATE = { name: '', tel: '' };

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onAdd, onCheckforUniqName } = this.props;
    const { name, tel } = this.state;

    const checkUniqName = onCheckforUniqName(name);
    if (!checkUniqName) return;

    if (!(name && tel)) {
      alert('Empty field');
      return;
    }

    onAdd({ id: uuidv4(), name, tel });
    this.reset();
  };

  reset = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="tel"
            value={this.state.tel}
            onChange={this.handleChange}
          />
        </label>
        <button className={s.btnAddContact} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAdd: PropTypes.func,
  onCheckforUniqName: PropTypes.func,
};

export default ContactForm;
