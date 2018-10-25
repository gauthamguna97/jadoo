import React, { Component } from 'react'
import Style from "./css/home.css.js"
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import SearchBar from '../containers/search_bar.js'
import VerticalList from '../containers/vertical_list.js'

export default class HomePage extends Component {

  render() {

    return (
      <div style={Style.home}>
        <SearchBar />
        <VerticalList />
      </div>
    );
  };
}
