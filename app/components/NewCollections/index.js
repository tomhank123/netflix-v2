/**
 *
 * NewCollections
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import swiperOptions from 'utils/swiperConfig';
import NewMovie from 'components/NewMovie';
import Billboard from 'components/Billboard';

import { getCollections } from './helpers';
import MovieList from './MovieList';
import Wrapper from './Wrapper';

function NewCollections({ isSwiper = false, collections }) {
  const [billboard, filteredColls] = getCollections(collections);

  return (
    <Wrapper>
      <Billboard item={billboard} />

      {filteredColls &&
        filteredColls.map(({ id, title, data }) => (
          <section key={id} className="mt-3">
            <h5>{title}</h5>
            {isSwiper ? (
              <Swiper {...swiperOptions}>
                {data &&
                  data.map(movie => (
                    <SwiperSlide key={movie.id}>
                      <NewMovie item={movie} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <MovieList>
                {data &&
                  data.map(movie => <NewMovie key={movie.id} item={movie} />)}
              </MovieList>
            )}
          </section>
        ))}
    </Wrapper>
  );
}

NewCollections.propTypes = {
  isSwiper: PropTypes.bool,
  collections: PropTypes.array,
};

export default NewCollections;
