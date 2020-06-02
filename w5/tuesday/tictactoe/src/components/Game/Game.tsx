import React, { Component } from 'react';
import Board from '../Board/Board';
import TickType from '../../types/TickType';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Game.css'

type GameState = {
    player: string,
    values: (TickType[])[],
    histories: TickType[],
    canplay: boolean,
}

class Game extends Component<any, GameState> {

    n = 10

    constructor(props: any) {
        super(props)
        let values: (TickType[])[] = [];
        for (let i = 0; i < this.n; i++) {
            values.push([]);

            for (let j = 0; j < this.n; j++) {
                let tick: TickType = {
                    value: "",
                    decorated: false,
                    row: i, 
                    col:j
                }
                values[i].push(tick);
            }
        }

        this.state = {
            player: "X",
            values: values,
            histories: [],
            canplay: true
        };
    }

    checkWinnder = () => {
        
        //Check vertical and horizontal
        for (let row = 0; row <this.n; row++) {
        
            let countHorizontalX = 0;
            let countHorizontalO = 0;
            let countVerticalX = 0;
            let countVerticalO = 0;
            let arrayHX: TickType[] = []
            let arrayHO: TickType[] = []
            let arrayVX: TickType[] = []
            let arrayVO: TickType[] = []
            
            for (let col = 0; col < this.n; col++) {
                
                countHorizontalX = this.calculate(this.state.values[row][col].value, countHorizontalX, "X")
                if (countHorizontalX > 0) {
                    arrayHX.push(this.state.values[row][col])
                } else {
                    arrayHX = []
                }

                countHorizontalO = this.calculate(this.state.values[row][col].value, countHorizontalO, "O")
                if (countHorizontalO > 0) {
                    arrayHO.push(this.state.values[row][col])
                } else {
                    arrayHO = []
                }

                countVerticalX = this.calculate(this.state.values[col][row].value, countVerticalX, "X")
                if (countVerticalX > 0) {
                    arrayVX.push(this.state.values[col][row])
                } else {
                    arrayVX = []
                }

                countVerticalO = this.calculate(this.state.values[col][row].value, countVerticalO, "O")
                if (countVerticalO > 0) {
                    arrayVO.push(this.state.values[col][row])
                } else {
                    arrayVO = []
                }

                if (countHorizontalX === 5) {
                    let values = this.state.values
                    arrayHX.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values, 
                        canplay: false
                    })
                    console.log(this.state)
                    return;
                } 

                if (countHorizontalO === 5) {
                    let values = this.state.values
                    arrayHO.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values,
                        canplay: false
                    })
                    console.log(this.state)
                    return;
                } 
                
                if (countVerticalX === 5) {
                    let values = this.state.values
                    arrayVX.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values,
                        canplay: false
                    })
                    return;
                }
               
                if (countVerticalO === 5) {
                    let values = this.state.values
                    arrayVO.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values,
                        canplay: false
                    })
                    return;

                }
            }
        }   

        for (let run = 0; run < this.n; run++) {
            let countX = 0;
            let countO = 0;
            let arrayX: TickType[] = []
            let arrayO: TickType[] = []
            for (let col = 0, row = run; col <= run && row >=0; row--, col++) {
                
                countX = this.calculate(this.state.values[row][col].value, countX, "X")
                if (countX > 0) {
                    arrayX.push(this.state.values[row][col])
                } else {
                    arrayX = []
                }
                countO = this.calculate(this.state.values[row][col].value, countO, "O")
                if (countO > 0) {
                    arrayO.push(this.state.values[row][col])
                } else {
                    arrayO = []
                }

                if (countX === 5) {
                    let values = this.state.values
                    arrayX.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values, 
                        canplay: false
                    })
                    return;
                }

                if (countO === 5) {
                    let values = this.state.values
                    arrayO.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values,
                        canplay: false
                    })
                    return;
                }
            }
        }

        for (let run = 0; run < this.n; run++) {
            let countX = 0;
            let countO = 0;
            
            let arrayX: TickType[] = []
            let arrayO: TickType[] = []

            for (let col = run, row = this.n - 1 ; col < this.n && row >= run; col++, row--) {
                
                countX = this.calculate(this.state.values[row][col].value, countX, "X")
                if (countX > 0) {
                    arrayX.push(this.state.values[row][col])
                } else {
                    arrayX = []
                }
                countO = this.calculate(this.state.values[row][col].value, countO, "O")
                if (countO > 0) {
                    arrayO.push(this.state.values[row][col])
                } else {
                    arrayO = []
                }

    
                if (countX === 5) {
                    let values = this.state.values
                    arrayX.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values,
                        canplay: false
                    })
                    return;
                }

                if (countO === 5) {
                    let values = this.state.values
                    arrayO.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values,
                        canplay: false
                    })
                    return;
                }
            }
        }

        for (let run = 0; run < this.n; run ++) {
            let countX = 0;
            let countO = 0;
            let arrayX: TickType[] = []
            let arrayO: TickType[] = []

            for (let col = run, row = 0; col < this.n && row < this.n - run; col++, row++) {
                
                countX = this.calculate(this.state.values[row][col].value, countX, "X")
                if (countX > 0) {
                    arrayX.push(this.state.values[row][col])
                } else {
                    arrayX = []
                }

                countO = this.calculate(this.state.values[row][col].value, countO, "O")
                if (countO > 0) {
                    arrayO.push(this.state.values[row][col])
                } else {
                    arrayO = []
                }

                if (countX === 5) {
                    let values = this.state.values
                    arrayX.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values,
                        canplay: false
                    })
                    return;
                }

                if (countO === 5) {
                    let values = this.state.values
                    arrayO.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values,
                        canplay: false
                    })
                    return;
                }
            }
        }

        for (let run = 0; run < this.n; run++) {
            let countX = 0;
            let countO = 0;
            let arrayX: TickType[] = []
            let arrayO: TickType[] = []

            for (let row = run, col = 0; row < this.n && col < this.n - run; col++, row++) {
                countX = this.calculate(this.state.values[row][col].value, countX, "X")
                if (countX > 0) {
                    arrayX.push(this.state.values[row][col])
                } else {
                    arrayX = []
                }
                countO = this.calculate(this.state.values[row][col].value, countO, "O")
                if (countO > 0) {
                    arrayO.push(this.state.values[row][col])
                } else {
                    arrayO = []
                }

                if (countX === 5) {
                    let values = this.state.values
                    arrayX.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values,
                        canplay: false
                    })
                    return;
                }

                if (countO === 5) {
                    let values = this.state.values
                    arrayO.forEach( x => {
                        values[x.row][x.col].decorated = true
                    })
                    this.setState({
                        values: values,
                        canplay: false
                    })
                    return;
                }
            }
        }
    }

    calculate = (value: string, count: number, checker: string) : number  => {
        if (value === checker) {
            count = count + 1; 
        } else {
            count = 0;
        }

        return count;
    }

    onClick = (row: number, colum: number) => {
        let tick: TickType = {
            value: this.state.player,
            decorated: false, 
            row: row, 
            col: colum
        }
        let values = this.state.values
        values[row][colum] = tick;
        let history: TickType = {
            value: this.state.player,
            decorated: false, 
            col: colum, 
            row: row
        }
        
        this.setState({
            player: this.state.player  === "X" ? "O" : "X",
            values: values,
            histories: [...this.state.histories, history],
            canplay: true
        })

        this.checkWinnder();

    }

    onSelectHistory = (index: number) => {
        console.log(`index ${index}`);
        console.log(`current length ${this.state.histories.length}`);
        
        let values = this.state.values

        values.map( x => {
            x.map(y => y.decorated = false)
        })

        for (let i = index+1; i < this.state.histories.length; i++) {
            let history = this.state.histories[i]
            values[history.row][history.col].value = ""
            values[history.row][history.col].decorated = false;
        }

        for (let i = this.state.histories.length -1; i > index ; i--) {
            this.state.histories.pop();
        }

        this.setState({
            histories: this.state.histories, 
            player: this.state.histories[this.state.histories.length-1].value === "X" ? "O" : "X",
            values: values,
            canplay: true
        })

        console.log(this.state.values)
    }

    restart = () => {
        let values: (TickType[])[] = [];
        for (let i = 0; i < this.n; i++) {
            values.push([]);

            for (let j = 0; j < this.n; j++) {
                let tick: TickType = {
                    value: "",
                    decorated: false,
                    row: i, 
                    col:j
                }
                values[i].push(tick);
            }
        }
        this.setState({
            canplay: true, 
            histories: [],
            player: "X",
            values: values
        })
    }

    render() {
        return (
            <Container>
                <Row className="Game-row col-12">
                    <Col className="Game-board col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12">
                        <Board n={this.n} values={this.state.values} onClick={this.onClick} player={this.state.player} canplay={this.state.canplay} />
                    </Col>
                    <Col className="Game-history col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
                        <h3>TicTacToe</h3><h6>by hoanle</h6>
                        {
                            this.state.canplay ? <div></div> : <Button variant="success" onClick={this.restart}> Restart</Button>
                        }
                        <div className="Game-history-container">{
                            this.state.histories.map((h, index) => {
                                return <div key={index} className="Game-button">
                                    <Button variant="info" onClick={() => this.onSelectHistory(index)}>Step {index+1}: by player {h.value} at ({h.row+1},{h.col+1} )</Button>
                                </div>
                            })
                        }</div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Game;