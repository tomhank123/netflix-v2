/**
 *
 * Box
 *
 */

import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Box({ children }) {
  return (
    <Card bg="secondary" className="text-light text-center rounded-0 border-0">
      <Card.Body className="p-3 h5 m-0">{children}</Card.Body>
    </Card>
  );
}

Box.propTypes = {
  children: PropTypes.element,
};

export default Box;
