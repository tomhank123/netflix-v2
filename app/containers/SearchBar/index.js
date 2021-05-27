/**
 *
 * SearchBar
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation } from 'containers/App/selectors';
import { Form, FormControl } from 'react-bootstrap';

export function SearchBar({ dispatch, location }) {
  const { pathname, search } = location;
  const [keyword, setKeyword] = useState(search.replace('?q=', ''));

  useEffect(() => {
    if (keyword) {
      dispatch(push(`/search?q=${keyword}`));
      return;
    }

    if (pathname === '/search') {
      dispatch(push('/browse'));
    }
  }, [keyword]);

  return (
    <Form
      inline
      className="d-none d-lg-block"
      onSubmit={event => event.preventDefault()}
    >
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={keyword}
        onChange={({ target }) => setKeyword(target.value || '')}
      />
    </Form>
  );
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
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

export default compose(withConnect)(SearchBar);
