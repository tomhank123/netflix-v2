/**
 *
 * Profiles
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Wrapper from './Wrapper';
import Button from './Button';
import List from './List';

import users from './fixture';

export function Profiles({ setProfile }) {
  return (
    <Wrapper>
      <h1>Who&lsquo;s watching?</h1>
      <List>
        {users.map(u => (
          <li
            key={u.displayName}
            onClick={() => setProfile(u)}
            aria-hidden="true"
          >
            <img src={u.photoURL} alt={u.displayName} />
            <p>{u.displayName}</p>
          </li>
        ))}
      </List>
      <Button>manage profiles</Button>
    </Wrapper>
  );
}

Profiles.propTypes = {
  setProfile: PropTypes.func,
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

export default compose(withConnect)(Profiles);
