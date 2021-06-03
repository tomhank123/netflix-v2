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
import { makeSelectCollections, makeSelectGenres } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function BrowseGenre({
  genres,
  collections,
  onLoadGenres,
  onLoadCollections,
  onSelectedGenre,
  ...restProps
}) {
  useInjectReducer({ key: 'browseGenre', reducer });
  useInjectSaga({ key: 'browseGenre', saga });

  const { location } = restProps;
  const { genreId, parentId } = getUrlParams(location);

  useEffect(() => {
    onLoadGenres({ genreId, parentId });
    onLoadCollections({ genreId, parentId });
  }, [genreId, parentId]);

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <SelectGenres
          {...genres}
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
  genres: PropTypes.object,
  collections: PropTypes.object,
  onLoadGenres: PropTypes.func,
  onLoadCollections: PropTypes.func,
  onSelectedGenre: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  genres: makeSelectGenres(),
  collections: makeSelectCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadGenres = actions.genres.request;
  const onLoadCollections = actions.collections.request;

  return {
    ...bindActionCreators({ onLoadCollections, onLoadGenres }, dispatch),
    onSelectedGenre: url => dispatch(push(url)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(BrowseGenre);
