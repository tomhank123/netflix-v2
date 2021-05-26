/**
 *
 * Browse
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import collectionsData from 'fixtures/collections';

import Header from 'components/Header';
import Footer from 'components/Footer';
import NewCollections from 'components/NewCollections';

export function Browse() {
  return (
    <div>
      <Helmet>
        <title>Netflix</title>
        <meta name="description" content="Description of Browse" />
      </Helmet>

      <Header />
      <NewCollections collections={collectionsData} />
      <hr />
      <Footer />
    </div>
  );
}

Browse.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Browse);
