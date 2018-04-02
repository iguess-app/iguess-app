import React from 'react';
import Swiper from 'react-native-swiper';

type Props = {
  children: Element,
  onSwiperChange: Function,
};

const CustomSwiper = (props: Props) => {
  const { children, change } = props;
  return (
    <Swiper
      loop={false}
      index={1}
      showsPagination={false}
      onIndexChanged={index => change(index)}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
