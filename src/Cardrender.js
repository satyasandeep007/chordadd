import React, { Component } from 'react';
import Card from './Card';


export default class Cardrender extends Component {
    arr = []
    state = {
        nocards: this.arr
    }

    buttonHandle = () => {
        this.arr.push(1)
        this.setState({
            nocards: this.arr
        })
    }
    buttonHandle2 = () => {
        this.arr.pop(1)
        this.setState({
            nocards: this.arr
        })
    }

    renderFun = () => this.state.nocards.map((val, key) => <Card />)

    render() {
        return (
            <div className="content">
                <div className="buttons">
                    <button className="button1" onClick={this.buttonHandle}>Add Card</button>
                    <br></br>
                    <button className="button2" onClick={this.buttonHandle2}>Remove Card</button>
                    <br></br>
                    <button className="button3" onClick= "https://github.com/LalithBabu18/chord-adder-using-react">
                        View Source</button>
                    <br></br>
                </div>
                <div className="card-render">
                    <ol>
                        <li>
                            {this.renderFun()}
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}
