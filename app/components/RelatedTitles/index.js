/**
 *
 * RelatedTitles
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

function RelatedTitles({ items, loading, error }) {
  if (loading) {
    return (
      <React.Fragment>
        <Skeleton />
        <Skeleton width="40%" />
      </React.Fragment>
    );
  }

  if (error) {
    return <Alert variant="warning">{error}</Alert>;
  }

  if (items) {
    return (
      <p>
        <strong>Explore titles related to:&nbsp;</strong>
        {items && items.map(({ name, id }) => <span key={id}>{name}, </span>)}
      </p>
    );
  }

  return null;
}

RelatedTitles.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default RelatedTitles;
