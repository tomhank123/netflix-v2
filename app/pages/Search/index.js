/**
 *
 * Search
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import { singleCollection } from 'fixtures/collections';

import ProfileSelector from 'containers/ProfileSelector';
import NewCollections from 'components/NewCollections';
import Box from 'components/Box';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from 'react-bootstrap';

export function Search() {
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
          <Box>Explore titles related to: Keyword A | Keyword B</Box>
          <NewCollections collections={singleCollection} />
          <Footer />
        </Container>
      </ProfileSelector>
    </div>
  );
}

Search.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Search);
