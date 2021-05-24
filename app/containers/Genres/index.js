/**
 *
 * Genres
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';

import Form from 'react-bootstrap/Form';
import makeSelectGenres from './selectors';
import reducer from './reducer';

export function Genres() {
  useInjectReducer({ key: 'genres', reducer });

  return (
    <Form inline className="mb-3">
      <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        Movies/TV Shows
      </Form.Label>
      <Form.Control
        as="select"
        className="my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        custom
      >
        <option value="0">Genres...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Control>
    </Form>
  );
}

Genres.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  genres: makeSelectGenres(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Genres);
