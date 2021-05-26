/**
 *
 * MyList
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
import Header from 'components/Header';
import Footer from 'components/Footer';

export function MyList() {
  return (
    <div>
      <Helmet>
        <title>MyList</title>
        <meta name="description" content="Description of MyList" />
      </Helmet>

      <SelectProfiles>
        <Header />
        <NewCollections collections={singleCollection} />
        <hr />
        <Footer />
      </SelectProfiles>
    </div>
  );
}

MyList.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(MyList);
