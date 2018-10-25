
import React,{Component} from 'react'

export default function(state=null,action) {
    const image =  {
      restaurants : 'http://www.newdesignfile.com/postpic/2009/07/restaurant-map-icon_83453.png',
      shopping : 'https://image.flaticon.com/icons/svg/275/275790.svg',
      movies : 'http://icons.iconarchive.com/icons/hopstarter/button/256/Button-Play-icon.png',
      doctors : 'https://png.icons8.com/metro/1600/doctors-bag.png',
      jobs : 'http://freeflaticons.com/wp-content/uploads/2014/09/job-copy-1411122422gn8k4.png',
      search : 'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Search-icon.png'
    }
    return[
        {name:'Restaurants',image: image.restaurants},
        {name:'Shopping',image: image.shopping},
        {name:'Movies',image: image.movies},
        {name:'Doctors',image: image.doctors},
        {name:'Jobs',image: image.jobs}
      ];
}
