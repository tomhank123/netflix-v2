/**
 *
 * Footer
 *
 */

import React from 'react';

import { Button, Container } from 'react-bootstrap';
import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import Wrapper from './Wrapper';
import Nav from './Nav';

const footerLinks = [
  {
    id: 0,
    title: 'Audio and Subtitles',
    url: '/audio-and-subtitles',
  },
  {
    id: 1,
    title: 'Audio Description',
    url: '/audio-description',
  },
  {
    id: 2,
    title: 'Help Center',
    url: '/help-center',
  },
  {
    id: 3,
    title: 'Gift Cards',
    url: '/gift-cards',
  },
  {
    id: 4,
    title: 'Media Center',
    url: '/media-center',
  },
  {
    id: 5,
    title: 'Investor Relations',
    url: '/investor-relations',
  },
  {
    id: 6,
    title: 'Jobs',
    url: '/jobs',
  },
  {
    id: 7,
    title: 'Terms of Use',
    url: '/terms-of-use',
  },
  {
    id: 8,
    title: 'Privacy',
    url: '/privacy',
  },
  {
    id: 9,
    title: 'Legal Notices',
    url: '/legal-notices',
  },
  {
    id: 10,
    title: 'Cookie Preferences',
    url: '/cookie-preferences',
  },
  {
    id: 11,
    title: 'Corporate Information',
    url: '/corporate-information',
  },
  {
    id: 12,
    title: 'Contact Us',
    url: '/contact-us',
  },
];
function Footer() {
  return (
    <Wrapper>
      <Container>
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
