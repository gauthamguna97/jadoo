import { combineReducers } from 'redux';
import VerticalList from './vertical_list.js'
import FooterList from './footer_list.js'
import VerticalInfo from './vertical_info.js'
import Alert from './alert.js'

const rootReducer = combineReducers({
  VerticalList: VerticalList,
  FooterList: FooterList,
  VerticalInfo: VerticalInfo,
  Alert: Alert,
});

export default rootReducer;
