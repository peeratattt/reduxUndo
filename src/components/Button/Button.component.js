import React from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './Button.style'

const ButtonComponent = props => {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
      <Text style={styles.textLabel}>{props.label}</Text>
    </TouchableOpacity>
  )
}

ButtonComponent.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  label: PropTypes.string,
  onPress: PropTypes.func,
}

export default ButtonComponent