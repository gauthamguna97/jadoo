import { combineReducers } from 'redux';
import VerticalList from './vertical_list.js'
import FooterList from './footer_list.js'

const rootReducer = combineReducers({
  VerticalList : VerticalList,
  FooterList : FooterList
});

export default rootReducer;
