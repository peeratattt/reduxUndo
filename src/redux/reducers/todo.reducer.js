import * as types from '../actions/type.action'

const todos = (state = [], action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case types.TODO_TOGGLE:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos