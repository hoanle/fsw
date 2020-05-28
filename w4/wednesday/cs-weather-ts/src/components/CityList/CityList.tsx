import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './CityList.css';

type CityListProps = {
    cities: { id: number; name: string; image: string; }[],
    onClick: (id: number) => void
}

class CityList extends Component<CityListProps> {

    constructor(props: CityListProps) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.cities.map(item => {
                        return (
                            <div key={item.id} className="CityItem-div" onClick={() => this.props.onClick(item.id)}>{item.name}</div>
                        );
                    })
                }
            </div>
        );
    }
}

export default CityList;