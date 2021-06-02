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
import Billboard from 'components/Billboard';
import Alert from 'react-bootstrap/Alert';

import { getCollections } from './helpers';
import MovieList from './MovieList';
import Wrapper from './Wrapper';

function Collections({ isSwiper = false, loading, error, items }) {
  const [billboard, filteredColls] = getCollections(items);

  if (loading) {
    return (
      <React.Fragment>
        {[1, 2, 3, 4, 5, 6].map(id => (
          <section className="mt-3" key={id}>
            <Skeleton wrapper="h5" width={250} />
            {!isSwiper ? (
              <Swiper {...swiperOptions}>
                {[7, 8, 9, 10, 11, 12, 13, 14].map(childId => (
                  <SwiperSlide key={childId}>
                    <Skeleton wrapper="div" height={120} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <MovieList>
                {[7, 8, 9, 10, 11, 12].map(childId => (
                  <Skeleton key={childId} wrapper="div" height={120} />
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
        <Billboard item={billboard} />

        {filteredColls &&
          filteredColls.map(({ id, title, data }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <section key={`${id}-${index}`} className="mt-3">
              <h5>{title}</h5>
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
