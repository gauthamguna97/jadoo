import axios from "axios"

export default function(vertical,link){
    var response =  axios.get(`https://t.justdial.com/api/india_api_read/18july2018/filternew.php?city=Bangalore&search=Restaurants&vid=89&level=1&wap=2&searchReferrer=gen&sieve=%7B%22name%22%3A%22commonFilterModel%22%2C%22selector%22%3A%22primary%22%2C%22runInit%22%3Atrue%7D`);
    return {
      type : 'FETCH_RESTAURANTS',
      payload : response
    }
}
