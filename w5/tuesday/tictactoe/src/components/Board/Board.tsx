import './Board.css';

import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import Square from '../Square/Square';
import TickType from '../../types/TickType';

type BoardProps = {
    n: number,
    onClick: (row: number, column: number) => void
    values: (TickType[])[], 
    player: string,
    canplay: boolean
}

type BoardState = {
    values: (TickType[])[], 
    canplay: boolean
}

class Board extends Component<BoardProps, BoardState> {
    rows : number[]
    cols: number[]     

    constructor(props: BoardProps) {
        super(props)
        this.rows = [];
        this.cols = []

        for (let i = 0; i < this.props.n; i++) {
            this.rows.push(i);
        }

        for (let i = 0; i < this.props.n; i++) {
            this.cols.push(i);
        }
        
        this.state = {
            values: this.props.values,
            canplay: this.props.canplay
        }
    }

    componentWillReceiveProps(props: BoardProps) {
        this.setState({
            values: props.values,
            canplay: props.canplay
        })
    }
    
    onClick = (row: number, col: number) => {
        this.props.onClick(row, col);
    }

    render() {
        console.log(this.state.canplay)
        return (
            <Container className="Board-container">
                {
                    this.rows.map(row => {
                        return(
                            <Row key={row}> {
                                this.cols.map(col => {
                                    return <div className="Board-div" key={col}>
                                        <Square row={row} col={col} onClick={this.onClick} tick={this.state.values[row][col]} canplay={this.props.canplay}/>
                                    </div>
                                })
                            }
                            </Row>
                        )
                    })
                }
            </Container>)
    }
}

export default Board;