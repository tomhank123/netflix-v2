/**
 *
 * Titles
 *
 */

import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ImPlay3 } from 'react-icons/im';
import titlesBrandImg from 'images/titles-brand.png';
import * as ROUTES from 'utils/routes';
import truncate from 'lodash/truncate';

import Wrapper from './Wrapper';
import Copy from './Copy';

function Titles({ item, ...restProps }) {
  const url = `${ROUTES.WATCH}?id=${item.id}`;
  const copy = truncate(item.overview || '', {
    length: 120,
    separator: /,? +/,
  });

  return (
    <Wrapper {...restProps}>
      <Image src={titlesBrandImg} alt={item.title || item.name} fluid />
      <Copy>{copy}</Copy>
      <Button as={Link} to={url} size="lg" variant="light" className="mr-2">
        <ImPlay3 /> Play
      </Button>
      <Button size="lg" variant="dark">
        <BiInfoCircle /> More Info
      </Button>
    </Wrapper>
  );
}

Titles.propTypes = {
  item: PropTypes.object,
};

export default Titles;
