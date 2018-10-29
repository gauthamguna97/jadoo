import React,{Component} from 'react'
import Style from './css/style.js'
import {Link} from 'react-router-dom'


export default class Header2 extends Component {
    render(){
        return(
          <div style={Style.header}>
            <div style={Style.headerMain}>
              <div style={Style.headerTable}>
                <Link to="/" style={Style.headerbutton}>
                  <img style={Style.backb} src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/prot_072018/hdrback.svg"></img>
                </Link>
                <div style={Style.headermiddle}>
                  <div style={Style.headername}>Restaurants</div>
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
