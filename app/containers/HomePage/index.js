/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Collections from 'components/Collections';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Header />
      <Collections />
      <Footer />
    </div>
  );
}
