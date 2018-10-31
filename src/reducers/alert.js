import React,{Component} from 'react'

export default function(state='false',action){
  switch (action.type) {
    case 'FETCH_RESTAURANTS':
      return true
      break;
    default:
      return state
  }
}
