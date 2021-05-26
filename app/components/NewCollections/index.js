/**
 *
 * NewCollections
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import NewMovie from 'components/NewMovie';
import Billboard from 'components/Billboard';

import { getCollections } from './helpers';
import Wrapper from './Wrapper';

function NewCollections({ collections }) {
  const [billboard, filteredColls] = getCollections(collections);
  const swiperOptions = {
    spaceBetween: 16,
    slidesPerView: 3,
    // onSlideChange: () => console.log('slide change'),
    // onSwiper: swiper => console.log(swiper),
    loop: true,
    freeMode: true,
    breakpoints: {
      '@0.00': {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      '@0.75': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '@1.00': {
        slidesPerView: 4,
        spaceBetween: 12,
      },
      '@1.50': {
        slidesPerView: 6,
        spaceBetween: 16,
      },
    },
  };

  return (
    <Wrapper>
      <Billboard item={billboard} />

      {filteredColls &&
        filteredColls.map(({ id, title, data }) => (
          <React.Fragment key={id}>
            <hr />
            <h4>{title}</h4>
            <Swiper {...swiperOptions}>
              {data &&
                data.map(movie => (
                  <SwiperSlide key={movie.id}>
                    <NewMovie item={movie} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </React.Fragment>
        ))}
    </Wrapper>
  );
}

NewCollections.propTypes = {
  collections: PropTypes.array,
};

export default NewCollections;
