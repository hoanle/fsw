import React, { Component } from 'react';
import './MainWeather.css';
import ClipLoader from "react-spinners/ClipLoader";

class MainWeather extends Component {

    render() {
        return (
            <div>
                {
                    this.props.weather == null ?
                        <ClipLoader
                            size={150}
                            color={"#faaabc"}
                            loading={true}
                        />
                        : <div className="MainWeather-div">
                            <div className="MainWeather-city">{this.props.weather.city}</div>
                            <div className="MainWeather-divider"> </div>
                            <div className="MainWeather-temp">{`${this.props.weather.temperatureF.toFixed(1)} °F / ${this.props.weather.temperatureC.toFixed(1)} °C`}</div>
                            <div className="MainWeather-main">{this.props.weather.main}</div>
                        </div>
                }
            </div>
        );
    }
}

export default MainWeather;