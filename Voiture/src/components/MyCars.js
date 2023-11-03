import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Myheader from "./MyHeader";
import Car from "./Cars";

class MyCars extends Component {

    state = {
        cars: ["Ford", "Chevrolet", "Cadillac"],
        colors: ["red", "green", "black"]
    }

    render() {
        return (
            <div>
                <Wrapper>
                    <Myheader
                        myStyle={ this.props.color }
                    >
                        { this.props.title }
                    </Myheader>
                </Wrapper>
                <Car color={this.state.colors[0]}>{this.state.cars[0]}</Car>
                <Car color={this.state.colors[1]}>{this.state.cars[1]}</Car>
                <Car color={this.state.colors[2]}>{this.state.cars[2]}</Car>
            </div>
        )
    }

}

export default MyCars;