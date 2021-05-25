/**
 *
 * Collections
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Movie from 'components/Movie';

import Ul from './Ul';
function Collections({ collections }) {
  return (
    <div>
      <Card body bg="secondary" className="text-light text-center">
        Hero
      </Card>

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
    </div>
  );
}

Collections.propTypes = {
  collections: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default Collections;
