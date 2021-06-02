/**
 *
 * Collections
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import swiperOptions from 'utils/swiperConfig';
import Movie from 'components/Movie';
import Billboard from 'components/Billboard';

import { getCollections } from './helpers';
import MovieList from './MovieList';
import Wrapper from './Wrapper';

function Collections({ isSwiper = false, collections }) {
  const [billboard, filteredColls] = getCollections(collections);

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

Collections.propTypes = {
  isSwiper: PropTypes.bool,
  collections: PropTypes.array,
};

export default Collections;
