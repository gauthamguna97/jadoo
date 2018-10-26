import React,{Component} from 'react'
import Style from './css/style.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Footer extends Component {

  setprops(e){
    console.log(e)
  }
  renderList(event){
    console.log(this.props.footerList)
    console.log('here')
    return this.props.footerList.map(item => {
      return (
        <li key={item.name} style={Style.footerelement} >
          <Link to={`/${item.name}`} onClick={this.setprops()}>
            <div style={Style.footerelementmerge}>
              <span style={Style.footerIcon}>
                <img style={Style.footerImage} src={item.image} />
              </span>
              <div style={Style.footerText}>{item.name}</div>
            </div>
          </Link>
        </li>
      );
    });
  }

  render(){
    return(
      <div style={Style.footer}>
        <div style={Style.divider}></div>
        <ul style={Style.footerList}>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    footerList : state.FooterList
  }
}

export default connect(mapStateToProps)(Footer);
