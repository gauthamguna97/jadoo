import React, { Component } from 'react'
import Style from "./css/home.css.js"
import {FetchList} from '../actions/index.js'

import Header from '../containers/headersecond.js'

import {connect} from 'react-redux'

const RestaurantContext = React.createContext()

class Restaurants extends Component {


  renderList(event){

    return(
      <RestaurantContext.Consumer>
        {
          (context)=>
            context.map(item =>{
              return(
                <li style={Style.vertical} key={item[0]}>
                  <div style={Style.imagecell}>
                    <img src = {item[19]} style={Style.images} />
                  </div>
                  <div style={Style.textcell}>
                    <span style={Style.heading}>{item[1]}</span>
                    <span style={Style.description}>{item[12]}</span>
                    <span style={Style.rating}>{item[7]}</span>
                  </div>
                  <div  style={Style.linkbutton}>
                    <span>
                      <img style={Style.linkin} src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/prot_072018/rscall.svg"></img>
                    </span>
                    <span style={Style.linkname}>CALL</span>
                  </div>
                </li>
              )
            })

        }

      </RestaurantContext.Consumer>
    )
  }

  componentDidMount(){
      this.props.FetchList()
  }
  render() {
    if(this.props.data == 'error'){
      return(
        <div>Loading...</div>
      );
    } else {
      console.log(this.props.data)
      return (
        <RestaurantContext.Provider value={this.props.data}>
          <Header />
          <div style={Style.empty} />
          <ul>
          {this.renderList()}
          </ul>
        </RestaurantContext.Provider>
      );
    }
  };
}

function mapStateToProps({RestaurantSubCategory}){
  return {
    data : RestaurantSubCategory
  }
}

export default connect(mapStateToProps,{FetchList})(Restaurants);
