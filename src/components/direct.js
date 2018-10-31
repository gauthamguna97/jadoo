import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from '../containers/headersecond.js'
import {Fetch,FetchList} from '../actions/index.js'
import Footer from '../containers/footer.js'
import Style from './css/home.css.js'

import {Link} from 'react-router-dom'
class Direct extends Component{

  componentDidMount(){
    const {location,vid,id} = this.props.match.params ;
    console.log(location+" "+vid+" "+id);
    console.log(this.props.Alert)
    console.log(this.props.VerticalInfo)
    if(this.props.Alert == 'false'){
      this.props.Fetch('Restaurants',{location,vid,id});
    }
  }

  renderList(event) {
    console.log(this.props.VerticalInfo[0])
    return this.props.VerticalInfo.map(item =>{
      return(
        <li style={Style.vertical} key={item.catdname}>
          <div style={Style.imagecell}>
            <img src = {`https://akam.cdn.jdmagicbox.com/images/icons/android/2x/${item.img}`} style={Style.images} />
          </div>
          <div style={Style.textcell}>
            <span style={Style.heading}>{item.catdname}</span>
            <span style={Style.description}>{item.description}</span>
          </div>
          <Link to={`/Bangalore/${item.catdname}/nct-${item.n_catid}`} style={Style.linkbutton}>
            <img style={Style.linkin} src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/prot_072018/cmnarw.svg"></img>
          </Link>
        </li>
      );
    })
  }
  render(){
    if(this.props.VerticalInfo == 'error'){
      return(
        <div>Loading...</div>
      );
    } else {
      return(
      <div>
        <Header />
        <div style={Style.empty} />
        <ul style={Style.restaurantlist}>{this.renderList()}</ul>
      </div>
      )
    }
  }
}

function mapStateToProps({VerticalInfo,Alert}){

  return{
    VerticalInfo : VerticalInfo,
    Alert : Alert
  }
}

export default connect(mapStateToProps,{Fetch})(Direct);
