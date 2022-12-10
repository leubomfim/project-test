import P from 'prop-types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper } from 'swiper/react';
import { useInformationContext } from '../../contexts/context';

export const SwiperComponent = ({ children }) => {
  const { width } = useInformationContext();

  console.log(width);
  return (
    <Swiper
      spaceBetween={
        width >= 900 ? 50 : width < 600 ? 30 : width < 426 ? 20 : 50
      }
      slidesPerView={width >= 900 ? 3 : width < 426 ? 1 : width < 769 ? 2 : 3}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  );
};

SwiperComponent.propTypes = {
  children: P.node.isRequired,
};
