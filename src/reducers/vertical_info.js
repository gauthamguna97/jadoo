import React,{Component} from 'react'

export default function(state='error',action){

  switch (action.type) {
    case 'FETCH_RESTAURANTS':

      return action.payload.data.main.data;
      break;
    default :
        return state;
  }
}
