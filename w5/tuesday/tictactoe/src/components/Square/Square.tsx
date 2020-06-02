import React, { Component } from 'react';
import './Square.css';
import Button from 'react-bootstrap/Button';
import TickType from '../../types/TickType';

type SquareProps = {
    col: number,
    row: number
    onClick: (row: number, column: number) => void
    tick: TickType,
    canplay: boolean
}

type SquareState = {
    canplay: boolean
}

class Square extends Component<SquareProps, SquareState> {

    constructor(props: SquareProps) {
        super(props);
        this.state = {
            canplay: this.props.canplay
        }
    }


    componentWillReceiveProps(props: SquareProps) {
        this.setState({
            canplay: props.canplay
        })
    }

    render() {
        if (this.props.tick.decorated) {
            return (
                <Button className="Square-button" variant="danger" disabled>{this.props.tick.value}</Button>
            )
        } else if (this.props.tick.value === "X") {
            return (
                <Button className="Square-button" variant="outline-warning" disabled>{this.props.tick.value}</Button>
            )
        } else if (this.props.tick.value === "O") {
            return (
                <Button className="Square-button" variant="outline-info" disabled>{this.props.tick.value}</Button>
            )
        } else if (this.state.canplay === false) {
            return (
                <Button className="Square-button" variant="outline-secondary" disabled>{this.props.tick.value}</Button>
            )
        } else if (this.props.tick.value === "") {
            return (
                <Button className="Square-button" variant="outline-secondary" onClick={() => this.props.onClick(this.props.row, this.props.col)}>{this.props.tick.value}</Button>
            )
        }
        
    }
}

export default Square;