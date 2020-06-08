const axios = require('axios');

const axiosClient = axios.create(
  {
    baseURL: 'https://my-json-server.typicode.com',
    timeout: 30000
  }
)

export default axiosClient;