import { combineReducers } from 'redux';
import { addItem, removeItem } from '../actions';
import { ADD_ITEM, REMOVE_ITEM } from '../constants';

function todos(state = [], action) {
    switch (action.type) {
      case ADD_ITEM:
        return [...state, action.text ]
      case REMOVE_ITEM:
        return state.filter(e => e !== action.item)
      default:
        return state
    }
  }

const mainReducer = combineReducers({
    todos,
})
 
export default mainReducer