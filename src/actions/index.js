import axios from "axios"


export function Fetch(vertical,link){
  var response =  axios.get(`https://t.justdial.com/api/india_api_read/18july2018/filternew.php?city=Bangalore&search=Restaurants&vid=89&level=1&wap=2&searchReferrer=gen&sieve=%7B%22name%22%3A%22commonFilterModel%22%2C%22selector%22%3A%22primary%22%2C%22runInit%22%3Atrue%7D`);
  return {
    type : 'FETCH_RESTAURANTS',
    payload : response
  }
}
export function FetchList(){
  var response = axios.get(`https://t.justdial.com/api/india_api_write/18july2018/searchziva.php?city=Bangalore&area=Manyata%20Tech%20Park&lat=13.0424832&long=77.62411519999999&darea_flg=1&case=spcall&stype=category_list&search=Trending&national_catid=11263749&nextdocid=&attribute_values=&basedon=&sortby=&nearme=0&rnd1=0.94905&rnd2=0.18074&rnd3=0.89412&max=10&pg_no=1&wap=2&debugmode=1&median_latitude=&median_longitude=&bd_text=&login_mobile=&search_option=0&sort_order=0&pricedesc=0&priceasc=0&checkin=&checkout=&attr_search=&opt=&dummy=0&querySieve=search&querySieve=checkout&querySieve=checkin&adword_pos=%7B%7D&sieve=%7B%22name%22%3A%22resultModel%22%2C%22selector%22%3A%22result%22%2C%22runInit%22%3Atrue%7D&searchReferrer=gen%7Cflt`)
  console.log(response)
  return {
    type : 'FETCH_RESTAURANTS_SUBCATEGORY',
    payload : response
  }
}
