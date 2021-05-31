/**
 *
 * Search
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { singleCollection } from 'fixtures/collections';
import { makeSelectLocation } from 'containers/App/selectors';
import useDebounce from 'hooks/use-debounce';

import ProfileSelector from 'containers/ProfileSelector';
import NewCollections from 'components/NewCollections';
import Box from 'components/Box';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from 'react-bootstrap';

export function Search({ location }) {
  const { pathname, search } = location;
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const q = params.get('q');

    if (q) {
      setQuery(q);
    }
  }, [pathname, search]);

  useEffect(() => {
    if (query) {
      // eslint-disable-next-line no-console
      console.log('Call API Here');
    }
  }, [debouncedQuery]);

  return (
    <div>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="Description of Search" />
      </Helmet>

      <ProfileSelector>
        <Header />
        <Container fluid>
          <div className="mt-3" />
          <Box>Explore titles related to: {query} | Keyword B</Box>
          <NewCollections collections={singleCollection} />
          <Footer />
        </Container>
      </ProfileSelector>
    </div>
  );
}

Search.propTypes = {
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

export default compose(withConnect)(Search);
