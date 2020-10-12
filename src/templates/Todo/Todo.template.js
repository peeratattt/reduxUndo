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

  const RenderBtnFilter = () => {
    const lengthAll = props.todoList.length
    const lengthActive = props.todoList.filter(v => v.status === false).length
    const lengthCompleted = props.todoList.filter(v => v.status === true).length
    return (
      <View style={styles.viewBtnFilter}>
        <ButtonComponent style={{flex: 1}} label={`All (${lengthAll})`} />
        <ButtonComponent style={{flex: 1}} label={`Active (${lengthActive})`} />
        <ButtonComponent style={{flex: 1}} label={`Completed (${lengthCompleted})`} />
      </View>
    )
  }

  const RenderBtnUndoRedo = () => {
    return (
      <View style={styles.viewBtnFilter}>
        <ButtonComponent style={{flex: 1}} label="Undo" />
        <ButtonComponent style={{flex: 1}} label="Redo" />
      </View>
    )
  }

  return (
    <PageComponent>
      <InputTextComponent value={props.text} onChangeText={props.setText} />
      <ButtonComponent label="ADD" onPress={props.onAddTodo} style={{marginBottom: 16}}/>
      <RenderBtnUndoRedo />
      <ScrollView>
        {
          props.todoList.map(RenderTodoList)
        }
      </ScrollView>
      <RenderBtnFilter />
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