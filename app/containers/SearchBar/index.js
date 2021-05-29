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
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectLocation } from 'containers/App/selectors';
import { Form, FormControl } from 'react-bootstrap';
import { makeSelectKeyword } from './selectors';
import reducer from './reducer';
import { changeKeyword } from './actions';

const key = 'searchbar';

export function SearchBar({ location, onChangeKeyword, selectKeyword }) {
  useInjectReducer({ key, reducer });

  const { pathname } = location;
  const inputEl = useRef(null);
  const [keyword, setKeyword] = useState(selectKeyword);

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
        className="border-0 rounded-0"
        value={keyword}
        onKeyUp={evt => onChangeKeyword(evt, location)}
        onChange={({ target }) => setKeyword(target.value || '')}
      />
    </Form>
  );
}

SearchBar.propTypes = {
  location: PropTypes.object,
  onChangeKeyword: PropTypes.func,
  selectKeyword: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  selectKeyword: makeSelectKeyword(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeKeyword: (evt, location) => {
      const state = location.state || location;
      const keyword = evt.target.value || '';

      dispatch(changeKeyword(keyword));
      dispatch(push(`/search?q=${keyword}`, state));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchBar);
