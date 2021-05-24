/**
 *
 * Collections
 *
 */

import React from 'react';
import Movie from 'components/Movie';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Collections() {
  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {Array(20)
          .fill(0)
          .map(() => (
            <li>
              <Movie />
            </li>
          ))}
      </ul>
    </div>
  );
}

Collections.propTypes = {};

export default Collections;
