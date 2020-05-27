import axiosClient from './Base';
const API_KEY = "96ce736f04bfdeb7cee236af55800f0d";

const getWeather = (lat, lon) => {
    console.log("getWeather " + lat);
    
    return axiosClient.get('/data/2.5/weather', {
        params: {
            lat: lat,
            lon: lon,
            appid: API_KEY
        }
      })
}

const getWeatherByCity = (city) => {
    return axiosClient.get('/data/2.5/weather', {
        params: {
            q: city,
            appid: API_KEY
        }
      })
}

const weatherApi = {
    getWeather,
    getWeatherByCity
}

export default weatherApi;