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
import fixture from './fixture';

function Collections({ collections }) {
  // eslint-disable-next-line no-console
  console.log('collections', collections);

  const { items } = collections;

  return (
    <div>
      <Card body bg="secondary" className="text-light text-center">
        Hero
      </Card>

      {fixture.map(({ id, title }) => (
        <React.Fragment key={id}>
          <hr />
          <h5>{title}</h5>
          <Ul>
            {items &&
              items.map((item, index) => (
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
