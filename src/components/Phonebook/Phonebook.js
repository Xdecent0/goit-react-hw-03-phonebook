import PropTypes from 'prop-types';
import s from './Phonebook.module.css';

function Phonebook({ title, children }) {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
}

Phonebook.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Phonebook;
