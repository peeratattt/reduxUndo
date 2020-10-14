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
  const [selected, setSelected] = React.useState('All')
  const RenderTodoList = (v, k) => {
    return (
      <View style={styles.viewTodoList} key={k}>
        <TodoListComponent label={v.text} status={v.status} onPress={() => props.onToggleTodoList(k)} />
      </View>
    )
  }



  const RenderBtnFilter = ({onPress}) => {
    const lengthAll = props.todoList.length
    const lengthActive = props.todoList.filter(v => v.status === false).length
    const lengthCompleted = props.todoList.filter(v => v.status === true).length
    const btnArr = [
      {
        title: 'All',
        length: lengthAll,
      },
      {
        title: 'Active',
        length: lengthActive,
      },
      {
        title: 'Completed',
        length: lengthCompleted,
      },
    ]
    return (
      <View style={styles.viewBtnFilter}>
        {
          btnArr?.map((v, k) => (
            <ButtonComponent
              key={k}
              style={{flex: 1}}
              label={`${v.title} (${v.length})`}
              selected={selected === v.title}
              onPress={() => onPress(v.title)}
            />
          ))
        }
      </View>
    )
  }

  const RenderBtnUndoRedo = () => {
    return (
      <View style={styles.viewBtnUndoRedo}>
        <ButtonComponent style={{flex: 1}} label="Undo" />
        <ButtonComponent style={{flex: 1}} label="Redo" />
      </View>
    )
  }

  const onPressFilter = (key) => {
    console.log('onPressFilter: ', key)
    setSelected(key)
  }

  return (
    <PageComponent>
      <InputTextComponent value={props.text} onChangeText={props.setText} />
      <ButtonComponent label="ADD" onPress={props.onAddTodo} style={{marginBottom: 16}}/>
      <RenderBtnUndoRedo />
      <ScrollView style={styles.scrollView}>
        {
          props.todoList.map(RenderTodoList)
        }
      </ScrollView>
      <RenderBtnFilter onPress={onPressFilter} />
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