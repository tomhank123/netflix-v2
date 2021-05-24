/* eslint-disable react/no-array-index-key */
/**
 *
 * Collections
 *
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import Movie from 'components/Movie';

import Ul from './Ul';
import fixture from './fixture';

function Collections() {
  return (
    <div>
      <Card body bg="secondary" className="text-light text-center">
        Hero
      </Card>

      {fixture.map(({ id, title }) => (
        <React.Fragment key={id}>
          <h5>{title}</h5>
          <Ul>
            {Array(2)
              .fill(0)
              .map((item, index) => (
                <li>
                  <Movie key={item + index} />
                </li>
              ))}
          </Ul>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

Collections.propTypes = {};

export default Collections;
