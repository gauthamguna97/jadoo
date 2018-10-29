
import React,{Component} from 'react'

export default function(state=null,action) {
    var location='Bangalore'
    var vid = '89'
    const image =  {
      restaurants : 'http://www.newdesignfile.com/postpic/2009/07/restaurant-map-icon_83453.png',
      shopping : 'https://image.flaticon.com/icons/svg/275/275790.svg',
      movies : 'http://icons.iconarchive.com/icons/hopstarter/button/256/Button-Play-icon.png',
      doctors : 'https://static.thenounproject.com/png/883694-200.png',
      jobs : 'https://png.pngtree.com/svg/20160517/job_1171363.png',
    }
    return[
        {id:'0',name:'Restaurants',image: image.restaurants,link : `/${location}/${vid}/Restaurants`},
        {id:'1',name:'Shopping',image: image.shopping,link : `/${location}/${vid}/Shopping`},
        {id:'2',name:'Movies',image: image.movies,link : `/${location}/${vid}/Movies`},
        {id:'3',name:'Doctors',image: image.doctors,link : `/${location}/${vid}/Doctors`},
        {id:'4',name:'Jobs',image: image.jobs,link : `/${location}/${vid}/Jobs`}
      ];
}
