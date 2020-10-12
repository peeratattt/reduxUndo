import * as types from '../actions/type.action'

const initState = []

const todos = (state = initState, action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return [
        ...state,
        {
          text: action.payload,
          completed: false
        }
      ]
    case types.TODO_TOGGLE:
      return state.map((todo, key) =>
        key === action.payload ? { ...todo, status: !todo.status } : todo
      )
    default:
      return state
  }
}

export default todos