/**
 *
 * Titles
 *
 */

import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';
// import PropTypes from 'prop-types';
import { ImPlay3 } from 'react-icons/im';
import titlesBrandImg from 'images/titles-brand.png';

import Wrapper from './Wrapper';
import Copy from './Copy';

function Titles({ ...restProps }) {
  return (
    <Wrapper {...restProps}>
      <Image src={titlesBrandImg} alt="titlesBrandImg" fluid />
      <Copy>
        Dreams cost money, so taking a terrible risk to make as much of it as he
        can. If caught, he loses everything.
      </Copy>
      <Button size="lg" variant="light" className="mr-2">
        <ImPlay3 /> Play
      </Button>
      <Button size="lg" variant="dark">
        <BiInfoCircle /> More Info
      </Button>
    </Wrapper>
  );
}

Titles.propTypes = {};

export default Titles;
