/**
 *
 * Latest
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import collectionsData from 'fixtures/collections';

import { Container } from 'react-bootstrap';
import ProfileSelector from 'containers/ProfileSelector';
import NewCollections from 'components/NewCollections';
import Header from 'components/Header';
import Footer from 'components/Footer';

export function Latest() {
  return (
    <div>
      <Helmet>
        <title>Latest</title>
        <meta name="description" content="Description of Latest" />
      </Helmet>

      <ProfileSelector>
        <Header />
        <Container fluid>
          <NewCollections isSwiper collections={collectionsData} />
          <Footer />
        </Container>
      </ProfileSelector>
    </div>
  );
}

Latest.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Latest);
