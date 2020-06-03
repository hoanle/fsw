const axios = require('axios');

const axiosClient = axios.create(
  {
    baseURL: 'https://ftw-highscores.herokuapp.com/',
    timeout: 30000,
    headers: {"Content-Type": "application/x-www-form-urlencoded"} 
  }
)

export default axiosClient;