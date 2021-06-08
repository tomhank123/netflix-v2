/**
 *
 * Billboard
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { Button, Container, Image, Alert } from 'react-bootstrap';
import backdropImg from 'images/backdrop.png';
import Backdrop from './Backdrop';
import Titles from './Titles';
import Wrapper from './Wrapper';

import * as actions from './actions';
import { makeSelectBillboard } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Billboard({ billboard, onLoadBillboard }) {
  useInjectReducer({ key: 'billboard', reducer });
  useInjectSaga({ key: 'billboard', saga });

  const { item, error, loading } = billboard;

  useEffect(() => {
    onLoadBillboard();
  }, []);

  if (loading) {
    return null;
  }

  if (error) {
    return <Alert variant="warning">{error}</Alert>;
  }

  if (item) {
    const prefixPath = 'https://www.themoviedb.org/t/p/w1280_and_h720_bestv2';
    const backdrop = item.backdrop_path
      ? `${prefixPath}/${item.backdrop_path}`
      : backdropImg;

    return (
      <Wrapper>
        <Image src={backdrop} alt="backdrop" fluid />
        <Backdrop>
          <Container fluid>
            <Titles item={item} />
            <div className="ml-auto">
              <Button size="sm" variant="outline-light" className="mr-2">
                Mute
              </Button>
              <Button size="sm" variant="outline-light">
                18+
              </Button>
            </div>
          </Container>
        </Backdrop>
      </Wrapper>
    );
  }

  return null;
}

Billboard.propTypes = {
  billboard: PropTypes.object,
  onLoadBillboard: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  billboard: makeSelectBillboard(),
});

function mapDispatchToProps(dispatch) {
  const onLoadBillboard = actions.billboard.request;

  return {
    ...bindActionCreators({ onLoadBillboard }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Billboard);
