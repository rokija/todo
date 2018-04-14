import { ADD_ITEM, REMOVE_ITEM } from '../constants';

export const addItem = (text) => {
    return { 
        type: ADD_ITEM, 
        text 
    }
  }

  export const removeItem = (item) => {
    return { 
        type: REMOVE_ITEM, 
        item 
    }
  }