import React from 'react'
import {
  View,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native'
import {
  PageComponent,
  ButtonComponent,
  InputTextComponent,
  TodoListComponent,
} from '../../components'
import PropTypes from 'prop-types'
import styles from './Todo.style'
import {SwipeListView} from 'react-native-swipe-list-view'

const TodoTemplate = props => {
  const [selected, setSelected] = React.useState('All')
  const RenderTodoList = (data) => {
    const {item, index} = data
    return (
      <TodoListComponent
        key={index}
        label={item.text}
        status={item.status}
        onPress={() => props.onToggleTodoList(index)}
      />
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
    setSelected(key)
  }

  const renderHiddenItem = () => (
    <View style={styles.rowBack}>
        <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
            <Text style={styles.backTextWhite}>Delete</Text>
        </View>
    </View>
  );

  const onSwipeValueChange = (data) => {
    console.log('onSwipeValueChange: ', data)
  }

  return (
    <PageComponent>
      <InputTextComponent
        onSubmitEditing={props.onAddTodo}
        value={props.text}
        onChangeText={props.setText}
        placeholder="Insert Todo"
      />
      <ButtonComponent
        label="ADD"
        onPress={props.onAddTodo}
        style={{marginBottom: 16}}
      />
      <View style={styles.scrollView}>
        <RenderBtnFilter
          onPress={onPressFilter}
        />
        <SwipeListView
          data={props.todoList}
          renderItem={RenderTodoList}
          renderHiddenItem={renderHiddenItem}
          // rightOpenValue={-Dimensions.get('window').width}
          onSwipeValueChange={onSwipeValueChange}
        />
      </View>
      <RenderBtnUndoRedo />
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