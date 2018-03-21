import React from 'react'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import { View } from 'react-native'

type Props = {
  children: Element,
  onSwiperChange: Function
}

const CustomSwiper = (props: Props) => {
  const { children, change } = props
  return (
   <Swiper
      loop={false}
      index={1}
      showsPagination={false}
      onIndexChanged={(index) => change(index)}>
      { children }
    </Swiper>
  )
}

export default CustomSwiper;
