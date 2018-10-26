import React, { Component } from 'react'
import {connect} from 'react-redux'

class Direct extends Component{

  componentDidMount(){
    console.log(this.props)
  }
  render(){
    if(!this.props.data){
      return(
        <div>Loading...</div>
      );
    }
    return(
      <div>{this.props.data.name}</div>
    );
  }
}

function mapStateToProps({VerticalList},ownprops){
  var name = ownprops.match.params.id;
  var index = -1;
  switch (name) {
    case 'Restaurants':
      index=0;
      break;
    case 'Shopping':
      index=1
      break;
    case 'Movies':
      index=2;
      break;
    case 'Doctors':
      index=3;
      break;
    case 'Jobs':
      index=4;
      break;
  }
  return{
    data : VerticalList[index]
  }
}

export default connect(mapStateToProps)(Direct);
