import { createStore } from 'redux';
import reducer from '../reducer';

var defaultstate = {
  text: "Default state text from store"
}

export var configureStore = (initialState=defaultstate) => {
  return createStore(reducer, initialState);
}
