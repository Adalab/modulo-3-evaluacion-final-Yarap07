import PropTypes from 'prop-types';
import '../styles/components/FilterBySpecies.scss';

function FilterBySpecies(props) {
  const handleSpecies = (ev) => {
    props.handleFilterSpecies(ev.target.value, ev.target.name);
  };

  return (
    <fieldset className='species'>
      <legend hidden></legend>
      <input
        className='species__checkbox'
        type='radio'
        name='species'
        id='human'
        value='human'
        onChange={handleSpecies}
        checked={props.speciesFilter === 'human'}
      />
      <label className='species__label' htmlFor='human'>
        Human
      </label>
      <input
        className='species__checkbox'
        type='radio'
        name='species'
        id='alien'
        value='alien'
        onChange={handleSpecies}
        checked={props.speciesFilter === 'alien'}
      />
      <label className='species__label' htmlFor='alien'>
        Alien
      </label>
    </fieldset>
  );
}

FilterBySpecies.propTypes = {
  handleFilterSpecies: PropTypes.func.isRequired,
  speciesFilter: PropTypes.string,
};

export default FilterBySpecies;
