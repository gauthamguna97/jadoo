import React,{Component} from 'react'

export default function(state={},action){

  switch (action.type) {
    case 'FETCH_RESTAURANTS_SUBCATEGORY':
      return action.payload.data.main.data;
      break;
    default :
        return 'error';
  }
}
