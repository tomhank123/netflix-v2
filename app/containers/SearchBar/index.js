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
import useDebounce from 'hooks/use-debounce';

import { makeSelectLocation } from 'containers/App/selectors';
import { Form, FormControl } from 'react-bootstrap';
import reducer from './reducer';

const key = 'searchbar';

export function SearchBar({ location, onChangeQuery, onChangeUrl }) {
  useInjectReducer({ key, reducer });

  const { pathname, search } = location;
  const [query, setQuery] = useState('');
  const inputEl = useRef(null);
  const debouncedQuery = useDebounce(search, 300);

  useEffect(() => {
    if (pathname === '/search') {
      inputEl.current.focus();
    }
  }, [pathname]);

  useEffect(() => {
    onChangeQuery(query, location);
  }, [query]);

  useEffect(() => {
    const params = new URLSearchParams(debouncedQuery);
    const q = params.get('q');

    onChangeUrl(q, location);
  }, [debouncedQuery]);

  useEffect(() => {
    if (pathname === '/search') {
      const params = new URLSearchParams(search);
      const q = params.get('q');

      setQuery(q || '');
    }
  }, []);

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
  onChangeUrl: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeUrl: (query, location) => {
      const { pathname } = location;
      const fromPath = {
        pathname: '/',
      };

      if (location.state && location.state.pathname !== '/search') {
        fromPath.pathname = location.state.pathname;
        fromPath.search = location.state.search;
      }

      if (!query && pathname === '/search') {
        dispatch(push(fromPath));
      }

      if (query && pathname !== '/search') {
        dispatch(
          push({
            pathname: '/search',
            search: `q=${query}`,
            state: location.state || location,
          }),
        );
      }
    },
    onChangeQuery: (query, location) => {
      const params = new URLSearchParams(location.search);

      if (query) {
        params.delete('q');
        params.append('q', query);
      } else {
        params.delete('q');
      }

      dispatch(
        push({
          search: params.toString(),
          state: location.state || location,
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
