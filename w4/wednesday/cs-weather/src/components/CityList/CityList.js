import React, { Component } from 'react';
import './CityList.css';

import Button from 'react-bootstrap/Button';

class CityList extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
            {
                this.props.cities.map( item => {
                    return (<Button key={item.id} className="CityItem-div" onClick={() => this.props.onClick(item.id)}>{item.name}</Button>);
                })
            }
            </div>
        );
    }
       
}

export default CityList;