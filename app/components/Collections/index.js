/**
 *
 * Collections
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from 'react-loading-skeleton';

import swiperOptions from 'utils/swiperConfig';
import Movie from 'components/Movie';
import Alert from 'react-bootstrap/Alert';

import MovieList from './MovieList';
import Wrapper from './Wrapper';

function Collections({ isSwiper = false, loading, error, items }) {
  if (loading) {
    return (
      <React.Fragment>
        {[1, 2, 3, 4, 5, 6].map(id => (
          <section key={id}>
            <Skeleton wrapper="h5" width={250} />
            {isSwiper ? (
              <Swiper {...swiperOptions}>
                {[7, 8, 9, 10, 11, 12, 13, 14, 15].map(childId => (
                  <SwiperSlide key={childId}>
                    <Skeleton wrapper="div" height={320} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <MovieList>
                {[7, 8, 9, 10, 11, 12, 13, 14, 15].map(childId => (
                  <Skeleton key={childId} wrapper="div" height={320} />
                ))}
              </MovieList>
            )}
          </section>
        ))}
      </React.Fragment>
    );
  }

  if (error) {
    return <Alert variant="warning">{error}</Alert>;
  }

  if (items) {
    return (
      <Wrapper>
        {items.map(({ title, data }) => (
          <section key={title}>
            <h5 className="font-weight-bold mt-4">{title}</h5>
            {isSwiper ? (
              <Swiper {...swiperOptions}>
                {data &&
                  data.map(movie => (
                    <SwiperSlide key={movie.id}>
                      <Movie item={movie} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <MovieList>
                {data &&
                  data.map(movie => <Movie key={movie.id} item={movie} />)}
              </MovieList>
            )}
          </section>
        ))}
      </Wrapper>
    );
  }

  return null;
}

Collections.propTypes = {
  isSwiper: PropTypes.bool,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default Collections;
