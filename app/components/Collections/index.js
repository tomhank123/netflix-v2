/* eslint-disable react/no-array-index-key */
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
  const { items } = collections;

  return (
    <div>
      <Card body bg="secondary" className="text-light text-center">
        Hero
      </Card>

      {items.map(({ title, data }) => (
        <React.Fragment key={title}>
          <hr />
          <h5>{title}</h5>
          <Ul>
            {data &&
              data.map((item, index) => (
                <li>
                  <Movie item={item} key={item.id + index} />
                </li>
              ))}
          </Ul>
        </React.Fragment>
      ))}
    </div>
  );
}

Collections.propTypes = {
  collections: PropTypes.object,
};

export default Collections;
