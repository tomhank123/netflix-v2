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
import { push } from 'connected-react-router';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Container } from 'react-bootstrap';

import SelectGenres from 'components/SelectGenres';
import Collections from 'components/Collections';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { getUrlParams, getGenreInfo } from './helpers';
import * as actions from './actions';
import { makeSelectCollections } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function BrowseGenre({
  collections,
  onLoadCollections,
  onSelectedGenre,
  ...restProps
}) {
  useInjectReducer({ key: 'browseGenre', reducer });
  useInjectSaga({ key: 'browseGenre', saga });

  const { location } = restProps;
  const { genreId, parentId } = getUrlParams(location);

  useEffect(() => {
    onLoadCollections({ genreId, parentId });
  }, [genreId, parentId]);

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <SelectGenres
          genreId={genreId}
          parentId={parentId}
          onSelectedGenre={onSelectedGenre}
          onGetGenreInfo={getGenreInfo}
        />
        <Collections isSwiper {...collections} />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

BrowseGenre.propTypes = {
  collections: PropTypes.object,
  onLoadCollections: PropTypes.func,
  onSelectedGenre: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadCollections = actions.collections.request;

  return {
    ...bindActionCreators({ onLoadCollections }, dispatch),
    onSelectedGenre: ({ target }) => {
      if (target.value) {
        dispatch(push(target.value));
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(BrowseGenre);
