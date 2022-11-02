import React, { Component, useEffect, useState } from 'react';

function fetchAPI(param) {
    //use https://localhost:7197 to test
    //https://billaspnetprojects.visualstudio.com
    const url = "https://localhost:7197/api/Main/calculate?sum=" + param;

    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    });
}


export class Calculator extends Component {
    static displayName = Calculator.name;

    constructor(props) {
        super(props);
        this.state = { curString: "", result : "" };
        this.numberOne = this.numberOne.bind(this);
        this.numberTwo = this.numberTwo.bind(this);
        this.numberThree = this.numberThree.bind(this);
        this.numberFour = this.numberFour.bind(this);
        this.numberFive = this.numberFive.bind(this);
        this.numberSix = this.numberSix.bind(this);
        this.numberSeven = this.numberSeven.bind(this);
        this.numberEight = this.numberEight.bind(this);
        this.numberNine = this.numberNine.bind(this);
        this.numberZero = this.numberZero.bind(this);
        this.emptySpace = this.emptySpace.bind(this);
        this.openBracket = this.openBracket.bind(this);
        this.closeBracket = this.closeBracket.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.plusSign = this.plusSign.bind(this);
        this.minusSign = this.minusSign.bind(this);
        this.multiplySign = this.multiplySign.bind(this);
        this.divideSign = this.divideSign.bind(this);
        this.toggleButtonState = this.toggleButtonState.bind(this);
        this.pointSign = this.pointSign.bind(this);
    }

    numberOne() {
        this.setState({
            curString: this.state.curString + "1"
        });
    }

    numberTwo() {
        this.setState({
            curString: this.state.curString + "2"
        });
    }

    numberThree() {
        this.setState({
            curString: this.state.curString + "3"
        });
    }

    numberFour() {
        this.setState({
            curString: this.state.curString + "4"
        });
    }

    numberFive() {
        this.setState({
            curString: this.state.curString + "5"
        });
    }

    numberSix() {
        this.setState({
            curString: this.state.curString + "6"
        });
    }

    numberSix() {
        this.setState({
            curString: this.state.curString + "6"
        });
    }

    numberSeven() {
        this.setState({
            curString: this.state.curString + "7"
        });
    }

    numberEight() {
        this.setState({
            curString: this.state.curString + "8"
        });
    }

    numberNine() {
        this.setState({
            curString: this.state.curString + "9"
        });
    }

    numberZero() {
        this.setState({
            curString: this.state.curString + "0"
        });
    }

    emptySpace() {
        this.setState({
            curString: this.state.curString + " "
        });
    }

    openBracket() {
        this.setState({
            curString: this.state.curString + "("
        });
    }

    closeBracket() {
        this.setState({
            curString: this.state.curString + ")"
        });
    }

    clearInput() {
        this.setState({
            curString: ""
        });
    }

    plusSign() {
        this.setState({
            curString: this.state.curString + "+"
        });
    }

    minusSign() {
        this.setState({
            curString: this.state.curString + "-"
        });
    }

    multiplySign() {
        this.setState({
            curString: this.state.curString + "*"
        });
    }

    divideSign() {
        this.setState({
            curString: this.state.curString + "/"
        });
    }

    pointSign() {
        this.setState({
            curString: this.state.curString + "."
        });
    }

    toggleButtonState = () => {
        let selectedWord = encodeURIComponent(this.state.curString);
        fetchAPI(selectedWord).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    this.setState({
                        curString: json
                    });
                });
            }
        });
    };

    render() {
        return (
            <div>
                <h1>Calculator</h1>


                <p aria-live="polite">Display: <strong>{this.state.curString}</strong></p>

                <button className="btn btn-primary" onClick={this.numberOne}>1</button>

                <button className="btn btn-primary" onClick={this.numberTwo}>2</button>

                <button className="btn btn-primary" onClick={this.numberThree}>3</button>

                <button className="btn btn-primary" onClick={this.emptySpace}>Space</button>

                <button className="btn btn-primary" onClick={this.plusSign}>+</button>
                <br /><br />
                <button className="btn btn-primary" onClick={this.numberFour}>4</button>

                <button className="btn btn-primary" onClick={this.numberFive}>5</button>

                <button className="btn btn-primary" onClick={this.numberSix}>6</button>

                <button className="btn btn-primary" onClick={this.openBracket}>(</button>

                <button className="btn btn-primary" onClick={this.minusSign}>-</button>

                <button className="btn btn-primary" onClick={this.pointSign}>.</button>
                <br /><br />
                <button className="btn btn-primary" onClick={this.numberSeven}>7</button>

                <button className="btn btn-primary" onClick={this.numberEight}>8</button>

                <button className="btn btn-primary" onClick={this.numberNine}>9</button>

                <button className="btn btn-primary" onClick={this.closeBracket}>)</button>

                <button className="btn btn-primary" onClick={this.multiplySign}>*</button>
                <br /><br />
                <button className="btn btn-primary" onClick={this.numberZero}>0</button>

                <button className="btn btn-primary" onClick={this.clearInput}>Clear</button>

                <button className="btn btn-primary" onClick={this.divideSign}>/</button>

                <button className="btn btn-primary" onClick={this.toggleButtonState}>=</button>
            </div>
        );
    }
}
