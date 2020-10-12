import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styles from './Page.style'

const PageComponent = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {props.children}
      </SafeAreaView>
    </>
  )
}

export default PageComponent