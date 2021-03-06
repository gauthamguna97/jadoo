import React, { Component } from 'react'
import Style from "./css/home.css.js"
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import SearchBar from '../containers/search_bar.js'
import VerticalList from '../containers/vertical_list.js'
import Header from '../containers/header.js'
import Footer from '../containers/footer.js'




class HomePage extends Component {
  render() {
    return (
      <div style={Style.home}>
        <Header />
        <Link to={`/search`}>
          <SearchBar />
        </Link>
        <div style={Style.divider}></div>
        <VerticalList />
        <div style={Style.divider}></div>
        <Footer />
      </div>
    );
  };
}
function mapStateToProps(state,ownprops){
  var name = ownprops.match.params.id;
  return {
    data : name
  }
}

export default connect(mapStateToProps)(HomePage)
