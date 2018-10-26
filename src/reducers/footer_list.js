import React,{Component} from 'react'

export default function(state=null,action) {
    const image =  {
      Search : 'https://images.vexels.com/media/users/3/132066/isolated/preview/71646d7673e8847ab07b3b7e78928777-search-circle-icon-by-vexels.png',
      Social : 'https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Twitter-Social-Icon.png',
      Pay : 'https://www.andrettiracing.com/wp-content/uploads/cash-payment-icon.png',
      Videos : 'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/My_Videos.png',
      News : 'https://vignette.wikia.nocookie.net/logopedia/images/a/a2/News-icon.png/revision/latest/scale-to-width-down/480?cb=20150621200405',
    }
    return[
        {id:'0',name:'Search',image: image.Search},
        {id:'1',name:'Social',image: image.Social},
        {id:'2',name:'Pay',image: image.Pay},
        {id:'3',name:'Videos',image: image.Videos},
        {id:'4',name:'News',image: image.News}
      ];
}
