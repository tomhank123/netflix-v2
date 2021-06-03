/**
 *
 * Search
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectLocation } from 'containers/App/selectors';
import useDebounce from 'hooks/use-debounce';

import { Container } from 'react-bootstrap';
import ProfileSelector from 'containers/ProfileSelector';
import Collections from 'components/Collections';
import Header from 'components/Header';
import Footer from 'components/Footer';
import RelatedTitles from 'components/RelatedTitles';

import * as actions from './actions';
import { makeSelectCollections, makeSelectKeywords } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Search({
  location,
  keywords,
  collections,
  onLoadKeywords,
  onLoadCollections,
}) {
  useInjectReducer({ key: 'search', reducer });
  useInjectSaga({ key: 'search', saga });

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
      onLoadKeywords(query);
      onLoadCollections(query);
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
          <RelatedTitles {...keywords} />
          <Collections {...collections} />
          <Footer />
        </Container>
      </ProfileSelector>
    </div>
  );
}

Search.propTypes = {
  location: PropTypes.object,
  keywords: PropTypes.object,
  collections: PropTypes.object,
  onLoadKeywords: PropTypes.func,
  onLoadCollections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  collections: makeSelectCollections(),
  keywords: makeSelectKeywords(),
});

function mapDispatchToProps(dispatch) {
  const onLoadCollections = actions.collections.request;
  const onLoadKeywords = actions.keywords.request;

  return bindActionCreators(
    {
      onLoadCollections,
      onLoadKeywords,
    },
    dispatch,
  );
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Search);
