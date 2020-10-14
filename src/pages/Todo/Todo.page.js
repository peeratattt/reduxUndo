import React from 'react'
import {TodoTemplate} from '../../templates'
import {useSelector, useDispatch} from 'react-redux'
import {
  todoAddAction,
  todoToggleAction
} from '../../redux/actions'

const TodoPage = props => {
  const [text, setText] = React.useState('')
  const dispatch = useDispatch()
  const todoList = useSelector(state => state.todo)

  const onAddTodo = () => {
    if (text !== '') {
      dispatch(todoAddAction(text))
      setText('')
    }
  }

  const onToggleTodoList = key => {
    dispatch(todoToggleAction(key))
  }

  return (
    <TodoTemplate
      text={text}
      setText={setText}
      todoList={todoList}
      onAddTodo={onAddTodo}
      onToggleTodoList={onToggleTodoList}
    />
  )
}

export default TodoPage