import React from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './Button.style'
import _ from 'lodash'

const ButtonComponent = props => {
  const backgroundColor = _.get(props, 'selected', true) ? 'green' : '#999'
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}, props.style]}
      onPress={props.onPress}
    >
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
  selected: PropTypes.bool,
}

export default ButtonComponent