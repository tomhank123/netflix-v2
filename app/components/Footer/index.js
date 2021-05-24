/**
 *
 * Footer
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Footer() {
  return (
    <div>
      <h1>Footer</h1>
      <ul>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <li>
              <Link to=".">Footer Item {index}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
