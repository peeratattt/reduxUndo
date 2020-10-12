import * as types from './type.action'

export const todoAddAction = payload => ({type: types.TODO_ADD, payload})
export const todoToggleAction = payload => ({type: types.TODO_TOGGLE, payload})