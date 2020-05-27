const axios = require('axios');

const axiosClient = axios.create(
  {
    baseURL: 'http://api.openweathermap.org/',
    timeout: 30000
  }
)

export default axiosClient;