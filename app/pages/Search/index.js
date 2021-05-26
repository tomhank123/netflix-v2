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

import SelectProfiles from 'containers/SelectProfiles';
import NewCollections from 'components/NewCollections';
import Box from 'components/Box';
import Header from 'components/Header';
import Footer from 'components/Footer';

export function Search() {
  return (
    <div>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="Description of Search" />
      </Helmet>

      <SelectProfiles>
        <Header />
        <hr />
        <Box>Explore titles related to: Keyword A | Keyword B</Box>
        <NewCollections collections={singleCollection} />
        <hr />
        <Footer />
      </SelectProfiles>
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
