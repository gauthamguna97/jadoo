import React,{Component} from 'react'
import Style from './css/style.js'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    render(){
        return(
          <div style={Style.header}>
            <div style={Style.headerMain}>
              <div style={Style.headerTable}>
                <Link to="/SideMenu" style={Style.headerbutton}>
                  <div style={Style.headermenu}></div>
                  <div style={Style.headermenu}></div>
                  <div style={Style.headermenu}></div>
                </Link>
                <div style={Style.headermiddle}>
                  <div style={Style.headername}>Jadoo</div>
                </div>
                <Link to="/Login" style={Style.headericon}>
                  <span style={Style.headerlogin}></span>
                </Link>
              </div>
            </div>
          </div>
        )
    }
}
