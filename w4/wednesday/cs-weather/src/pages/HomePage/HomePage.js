import React, { Component } from 'react';
import weatherApi from '../../api/WeatherApi';
import MainWeather from './../../components/MainWeather/MainWeather';
import CityList from './../../components/CityList/CityList';
import './HomePage.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class HomePage extends Component {

    constructor(props) {
        super(props)
        
        this.cities = [
            {id: 1, name: "Saigon"},
            {id: 2, name: "Paris"},
            {id: 3, name:  "New York"},
            {id: 4, name:  "Miami"},
            {id: 5, name:  "San Francisco"},
            {id: 6, name:  "Moscow"},
            {id: 7, name:  "Tokyo"},
            {id: 8, name:  "Vancouver"}
        ]
        
        this.state = {
            weather: null
        }        
    }

    callApiWeather = (loc) => {
        weatherApi.getWeather(loc.coords.latitude, loc.coords.longitude)
            .then((response) => {
                console.log(response);

                let theWeather = {
                    city: response.data.name, 
                    temperatureC:  response.data.main.temp - 273,
                    temperatureF:  response.data.main.temp,
                    main: response.data.weather[0].description, 
                }
                this.setState({
                    weather: theWeather
                })
            }).catch(error => {
                alert("Can't get weather data")
            })
    }

    componentDidMount() {
        if (navigator.geolocation != null) {
            navigator.geolocation.getCurrentPosition(this.callApiWeather, (error) => {
                this.setState({
                    weather: null
                })
                alert("Can't get current location. Please use side menu to get weather data")
            }, null);
        }
    }

    onClick = (id) => {
        let city = this.cities.filter(x => x.id == id)[0];
        console.log(city.name);
        
        weatherApi.getWeatherByCity(city.name).then((response) => {
            console.log(response);

            let theWeather = {
                city: response.data.name, 
                temperatureC:  response.data.main.temp - 273,
                temperatureF:  response.data.main.temp,
                main: response.data.weather[0].description
            }
            this.setState({
                weather: theWeather
            })
        }).catch(error => {
            this.setState({
                weather: null
            })
            alert("Can't get weather data")
        })
    }

    render() {
        return (
            <Container fluid className="no-padding">
                <Row>
                    <Col lg="2" className="HomePage-city-container no-padding">
                        <CityList cities={this.cities} onClick={this.onClick} />
                    </Col>
                    <Col lg="10" className="HomePage-weather-display-container no-padding">
                        <MainWeather className="HomePage-weather-card" weather={this.state.weather}/>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default HomePage;