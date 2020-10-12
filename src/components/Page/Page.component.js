import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styles from './Page.style'
import PropTypes from 'prop-types'

const PageComponent = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={[styles.container, props.style]}>
        {props.children}
      </SafeAreaView>
    </>
  )
}

PageComponent.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ])
}

export default PageComponent