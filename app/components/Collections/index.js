/**
 *
 * Collections
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Movie from 'components/Movie';

import Ul from './Ul';
import Wrapper from './Wrapper';

function Collections({ collections }) {
  return (
    <Wrapper>
      {collections &&
        collections.map(({ title, data }) => (
          <React.Fragment key={title}>
            <hr />
            <h5>{title}</h5>
            <Ul>
              {data &&
                data.map(item => (
                  <li key={item.id}>
                    <Movie item={item} />
                  </li>
                ))}
            </Ul>
          </React.Fragment>
        ))}
    </Wrapper>
  );
}

Collections.propTypes = {
  collections: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default Collections;
