import React from 'react'
import {
  View,
  TextInput
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './InputText.style'

const InputTextComponent = props => {
  return (
    <View style={styles.container}>
      <TextInput
        onSubmitEditing={props.onSubmitEditing}
        placeholder={props.placeholder}
        style={styles.textInput}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  )
}

InputTextComponent.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmitEditing: PropTypes.func,
}

export default InputTextComponent