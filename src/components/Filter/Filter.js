import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ filter, onFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => onFilter(e.target.value)}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;
