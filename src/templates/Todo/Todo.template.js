import React from 'react'
import {
  View,
  ScrollView,
} from 'react-native'
import {
  PageComponent,
  ButtonComponent,
  InputTextComponent,
  TodoListComponent,
} from '../../components'
import PropTypes from 'prop-types'
import styles from './Todo.style'

const TodoTemplate = props => {
  const RenderTodoList = (v, k) => {
    return (
      <View style={styles.viewTodoList} key={k}>
        <TodoListComponent label={v.text} status={v.status} onPress={() => props.onToggleTodoList(k)} />
      </View>
    )
  }
  return (
    <PageComponent>
      <InputTextComponent value={props.text} onChangeText={props.setText} />
      <ButtonComponent label="ADD" onPress={props.onAddTodo} />
      <ScrollView>
        {
          props.todoList.map(RenderTodoList)
        }
      </ScrollView>
    </PageComponent>
  )
}

TodoTemplate.propsTypes = {
  todoList: PropTypes.array,
  onAddTodo: PropTypes.func,
  onToggleTodoList: PropTypes.func,
  text: PropTypes.string,
  setText: PropTypes.func,
}

export default TodoTemplate