import React,{Component} from 'react'
import Style from './css/style.js'

export default class SearchBar extends Component{
  render() {
    return (
      <div style={Style.searchbar}>
        <div style={Style.searchMain}>
          <div style={Style.searchtable}>
            <div style={Style.searchinput}>
              <input style={Style.search} type="text" id="searchtxt" placeholder="Ask me anything..." />
            </div>
            <span style={Style.searchicon}>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
