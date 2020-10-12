import React from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'
import CheckBox from '@react-native-community/checkbox'
import styles from './Todo.style'

const TodoListComponent = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <CheckBox value={props.status} />
      <Text style={styles.textLabel}>{props.label}</Text>
    </TouchableOpacity>
  )
}

TodoListComponent.propTypes = {
  label: PropTypes.string,
  status: PropTypes.bool,
  onPress: PropTypes.func,
}

export default TodoListComponent