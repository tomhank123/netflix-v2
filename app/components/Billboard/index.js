/**
 *
 * Billboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';

function Billboard({ item }) {
  return item ? (
    <React.Fragment>
      <Box>Billboard</Box>
    </React.Fragment>
  ) : null;
}

Billboard.propTypes = {
  item: PropTypes.object,
};

export default Billboard;
