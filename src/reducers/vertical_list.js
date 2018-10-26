
import React,{Component} from 'react'

export default function(state=null,action) {
    const image =  {
      restaurants : 'http://www.newdesignfile.com/postpic/2009/07/restaurant-map-icon_83453.png',
      shopping : 'https://image.flaticon.com/icons/svg/275/275790.svg',
      movies : 'http://icons.iconarchive.com/icons/hopstarter/button/256/Button-Play-icon.png',
      doctors : 'https://static.thenounproject.com/png/883694-200.png',
      jobs : 'https://png.pngtree.com/svg/20160517/job_1171363.png',
    }
    return[
        {id:'0',name:'Restaurants',image: image.restaurants},
        {id:'1',name:'Shopping',image: image.shopping},
        {id:'2',name:'Movies',image: image.movies},
        {id:'3',name:'Doctors',image: image.doctors},
        {id:'4',name:'Jobs',image: image.jobs}
      ];
}
