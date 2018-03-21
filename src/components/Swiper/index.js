import React from 'react'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import { View } from 'react-native'

type Props = {
  children: Element,
  onSwiperChange: Function
}

const CustomSwiper = (props: Props) => {
  const { children, onSwiperChange } = props
  return (
   <Swiper
      loop={false}
      index={1}
      showsPagination={false}
      onIndexChanged={(index) => onSwiperChange(index)}>
      { children }
    </Swiper>
  )
}

// function mapDispatchToProps (dispatch) {
//   return {
//     onSwiperChange: (index) => dispatch(changeSwiper(index))
//   }
// }

export default CustomSwiper;
