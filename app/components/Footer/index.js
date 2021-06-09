/**
 *
 * Footer
 *
 */

import React from 'react';
import { Button, Container } from 'react-bootstrap';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { footerLinks } from './constants';
import Nav from './Nav';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <Container fluid>
        <ul className="list-inline">
          <li className="list-inline-item">
            <FaFacebookSquare size="2rem" className="text-muted" />
          </li>
          <li className="list-inline-item">
            <FaInstagram size="2rem" className="text-muted" />
          </li>
          <li className="list-inline-item">
            <FaTwitter size="2rem" className="text-muted" />
          </li>
          <li className="list-inline-item">
            <FaYoutube size="2rem" className="text-muted" />
          </li>
        </ul>
        <Nav>
          {footerLinks.map(({ id, title, url }) => (
            <Nav.Item key={id}>
              <Nav.Link href={url}>{title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <p>
          <Button size="sm" className="rounded-0" variant="outline-secondary">
            Service Code
          </Button>
        </p>
        <p>
          <small>© 1997-2021 Netflix, Inc. </small>
          <small>532cd653-e323-4203-97ad-b801fd56a464</small>
        </p>
      </Container>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
