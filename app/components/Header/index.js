/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies-home">Movies Home</Link>
        </li>
        <li>
          <Link to="/series-home">Series Home</Link>
        </li>
      </ul>
    </div>
  );
}

Header.propTypes = {};

export default Header;
