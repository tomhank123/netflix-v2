/**
 *
 * SelectProfiles
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Button from 'react-bootstrap/Button';
import Header from 'components/Header';
import Box from 'components/Box';
import Wrapper from './Wrapper';
import List from './List';

export function SelectProfiles({ children }) {
  const [profile, setProfile] = useState(null);

  if (!profile) return children;

  return (
    <React.Fragment>
      <Header isFixed readonly />
      <Wrapper>
        <h2 className="m-0">Who&apos;s Watching?</h2>
        <List>
          <Box onClick={() => setProfile(1)}>P</Box>
          <Box onClick={() => setProfile(2)}>P</Box>
          <Box onClick={() => setProfile(3)}>P</Box>
          <Box onClick={() => setProfile(4)}>P</Box>
          <Box onClick={() => setProfile(5)}>P</Box>
        </List>
        <Button variant="secondary" size="md">
          Manage Profiles
        </Button>
      </Wrapper>
    </React.Fragment>
  );
}

SelectProfiles.propTypes = {
  children: PropTypes.node,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(SelectProfiles);
