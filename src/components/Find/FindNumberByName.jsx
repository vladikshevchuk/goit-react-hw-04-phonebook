import React from 'react';
import PropTypes from 'prop-types';

export const FindNumberByName = ({ value, onChange }) => {
  return (
    <label>
      Find number by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

FindNumberByName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}