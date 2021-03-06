import React, { Component } from 'react';
import Style from "./css/style.js"
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import Actions from '../actions/index.js'

class VerticalList extends Component {

  renderList(event){
    return this.props.verticalList.map(item => {
      return (
        <li key={item.name} style={Style.vertical} >
          <Link to={`${item.link}`}>
            <div style={Style.verticalmerge}>
              <span style={Style.verticalIcon}>
                <img style={Style.verticalImage} src={item.image} />
              </span>
              <div style={Style.verticalText}>{item.name}</div>
            </div>
          </Link>
        </li>
      );
    });
  }

  render() {

    return (
        <ul style={Style.verticalList}>{this.renderList()}</ul>
    );
  };
}

function mapStateToProps(state){
  return{
    verticalList : state.VerticalList
  }
}

export default connect(mapStateToProps)(VerticalList);
