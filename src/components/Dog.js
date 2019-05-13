import React from 'react';
import PropTypes from 'prop-types';

function Dog({ name, age, sign }) {
  return (
    <main>
      <h3>Name</h3>
      <p>{name}</p>

      <h3>Age</h3>
      <p>{age ? age : 'unknown'}</p>

      <h3>Sign</h3>
      <p>{sign}</p>
    </main>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sign: PropTypes.string.isRequired,
};

export default Dog;
