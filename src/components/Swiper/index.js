import React from 'react'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { changeSwiperChange } from '@store/modules/flags'

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

function mapDispatchToProps (dispatch) {
  return {
    onSwiperChange: (index) => dispatch(changeSwiperChange(index))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CustomSwiper)
