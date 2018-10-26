import React,{Component} from 'react'
import Style from './css/style.js'

export default class Header extends Component {
    render(){
        return(
          <div style={Style.header}>
            <div style={Style.headerMain}>
              <div style={Style.headerTable}>
                <div style={Style.headerbutton}>
                  <div style={Style.headermenu}></div>
                  <div style={Style.headermenu}></div>
                  <div style={Style.headermenu}></div>
                </div>
                <div style={Style.headermiddle}>
                  <div style={Style.headername}>Jadoo</div>
                </div>
                <span style={Style.headericon}>
                  <span style={Style.headerlogin}></span>
                </span>
              </div>
            </div>
          </div>
        )
    }
}
