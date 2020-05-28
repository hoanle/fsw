import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CityList from '../../components/CityList/CityList';
import MainWeather from '../../components/MainWeather/MainWeather';
import './HomePage.css';
import weatherApi from '../../api/WeatherApi';

type CityType = {
    id: number,
    name: string, 
    image: string,
}

type WeatherType = {
    data: {
        name: string, 
        main: {
            temp: number
        },
        weather: {description: string}[]
    }
}

type WeatherProps = {
    city: string,
    temperatureC: number, 
    temperatureF: number, 
    description: string
}

type HomePageState = {
    weather: WeatherProps | null, 
    city: CityType | null
}

type HomePageProps = {

}

class HomePage extends Component<HomePageProps, HomePageState> {
    
    cities: CityType[];

    constructor(props: {}) {
        super(props)

        this.cities = [
            {id: 1, name: "Saigon", image: "https://www.tripsavvy.com/thmb/pePcQqX77-Ms6xcJ7YVzfgMmz3c=/3707x2085/smart/filters:no_upscale()/saigon-ho-chi-minh-city-vietnam-5c489f50c9e77c000112d22b.jpg"},
            {id: 2, name: "Paris", image: "https://media.cntraveler.com/photos/5cf96a9dd9fb41f17ed08435/master/pass/Eiffel%20Tower_GettyImages-1005348968.jpg"},
            {id: 3, name:  "New York", image: "https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg"},
            {id: 4, name:  "Miami", image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/471000/471674-Miami.jpg"},
            {id: 5, name:  "San Francisco", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg"},
            {id: 6, name:  "Moscow", image: "https://img.theculturetrip.com/x/wp-content/uploads/2019/04/eur_russia_moscow.jpg"},
            {id: 7, name:  "Tokyo", image: "https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/24/2020-03-24-tokyo-thumbnail-01.jpg"},
            {id: 8, name:  "Vancouver", image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Concord_Pacific_Master_Plan_Area.jpg"}
        ]
        
        this.state = {
            weather: null, 
            city: null
        }  
    }
    
    callApiWeather = (loc: Position) => {
        weatherApi.getWeather(loc.coords.latitude, loc.coords.longitude)
            .then((response: WeatherType) => {
                console.log(response);

                let theWeather: WeatherProps = {
                    city: response.data.name, 
                    temperatureC:  response.data.main.temp - 273,
                    temperatureF:  response.data.main.temp,
                    description: response.data.weather[0].description
                }
                this.setState({
                    weather: theWeather, 
                    city: null
                })
            }).catch((error: any) => {
                alert("Can't get weather data")
            })
    }
    
    onClick = (id : number) => {
        let city = this.cities.filter(x => x.id == id)[0];
        console.log(city.name);
        
        weatherApi.getWeatherByCity(city.name).then((response: WeatherType) => {
            console.log(response);

            let theWeather: WeatherProps = {
                city: response.data.name, 
                temperatureC:  response.data.main.temp - 273,
                temperatureF:  response.data.main.temp,
                description: response.data.weather[0].description
            }
            this.setState({
                weather: theWeather, 
                city: city
            })
        }).catch((error: any) => {
            this.setState({
                weather: null
            })
            alert("Can't get weather data")
        })
    }

    componentDidMount() {
        if (navigator.geolocation != null) {
            navigator.geolocation.getCurrentPosition(this.callApiWeather, (error: any) => {
                this.setState({
                    weather: null,
                    city: null
                })
                alert("Can't get current location. Please use side menu to get weather data")
            }, undefined);
        }
    }

    render() {
        return (
            <Container fluid className="no-padding">
                <Row>
                    <Col lg="2" className="HomePage-city-container no-padding">
                        <CityList cities={this.cities} onClick={this.onClick} />
                    </Col>
                    <Col lg="10" className="HomePage-weather-display-container no-padding">
                        <img className="HomePage-weather-image" src={this.state.city == null ? "https://www.tripsavvy.com/thmb/pePcQqX77-Ms6xcJ7YVzfgMmz3c=/3707x2085/smart/filters:no_upscale()/saigon-ho-chi-minh-city-vietnam-5c489f50c9e77c000112d22b.jpg" : this.state.city.image}></img>
                        <div className="HomePage-weather-card">
                            <MainWeather weather={this.state.weather}/>
                        </div>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default HomePage;