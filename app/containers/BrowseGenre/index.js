/**
 *
 * BrowseGenre
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Container } from 'react-bootstrap';

import GenreSelector from 'containers/GenreSelector';
import Collections from 'components/Collections';
import Header from 'components/Header';
import Footer from 'components/Footer';

import * as actions from './actions';
import { makeSelectCollections } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function BrowseGenre({ collections, onLoadCollections, ...restProps }) {
  useInjectReducer({ key: 'browseGenre', reducer });
  useInjectSaga({ key: 'browseGenre', saga });

  const { location } = restProps;

  useEffect(() => {
    onLoadCollections();
  }, [location]);

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <GenreSelector />
        <Collections isSwiper {...collections} />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

BrowseGenre.propTypes = {
  collections: PropTypes.object,
  onLoadCollections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadCollections = actions.collections.request;
  return bindActionCreators({ onLoadCollections }, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(BrowseGenre);
