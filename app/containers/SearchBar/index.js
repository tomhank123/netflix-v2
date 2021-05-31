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
import reducer from './reducer';

const key = 'searchbar';

export function SearchBar({ location, onChangeQuery }) {
  useInjectReducer({ key, reducer });

  const { pathname, search } = location;
  const [query, setQuery] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    if (pathname === '/search') {
      inputEl.current.focus();
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/search') {
      const params = new URLSearchParams(search);
      const q = params.get('q');

      setQuery(q || '');
    }
  }, []);

  useEffect(() => {
    onChangeQuery(query);
  }, [query]);

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
        value={query}
        onChange={evt => setQuery(evt.target.value)}
      />
    </Form>
  );
}

SearchBar.propTypes = {
  location: PropTypes.object,
  onChangeQuery: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeQuery: query => {
      const params = new URLSearchParams();

      if (query) {
        params.append('q', query);
      } else {
        params.delete('q');
      }

      dispatch(
        push({
          search: params.toString(),
        }),
      );
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchBar);
