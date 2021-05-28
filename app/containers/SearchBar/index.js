/**
 *
 * SearchBar
 *
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation } from 'containers/App/selectors';
import { Form, FormControl } from 'react-bootstrap';

export function SearchBar({ dispatch, location }) {
  const { pathname, search } = location;
  const inputEl = useRef(null);
  const [keyword, setKeyword] = useState(search.replace('?q=', ''));

  const onKeyUp = ({ target }) => {
    if (target.value) {
      const state = location.state || location;

      dispatch(push(`/search?q=${keyword}`, state));
    }
  };

  useEffect(() => {
    if (pathname === '/search' && !keyword) {
      const returnUrl = location.state ? location.state.pathname : 'browse';

      dispatch(push(returnUrl));
    }
  }, [keyword]);

  useEffect(() => {
    if (pathname === '/search') {
      inputEl.current.focus();
    }
  }, [pathname]);

  return (
    <Form
      inline
      className="d-none d-lg-block"
      onSubmit={event => event.preventDefault()}
    >
      <FormControl
        ref={inputEl}
        type="text"
        placeholder="Titles, people, genres"
        className="mr-sm-2"
        value={keyword}
        onKeyUp={onKeyUp}
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
