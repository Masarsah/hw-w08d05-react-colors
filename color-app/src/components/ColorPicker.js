import React, { Component } from 'react';
import ColorInput from './ColorInput';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redd: props.activeColor ? props.activeColor : '',
            red: this.props.activeColor[0],
            green: props.activeColor ? this.props.activeColor[1]: '',
            blue: props.activeColor ?  this.props.activeColor[2]: ''
        }
    }


    swatchStyle() {
        console.log(this.props.activeColor[0])
        return {
            width: '500px',
            height: '300px',
            margin: '0 auto',
            backgroundColor: `rgb( ${this.state.red}, ${this.state.green}, ${this.state.blue})`
        }

    }
    // handleSubmit(event) {
    //     event.preventDefault();
    //     this.props.handleSubmit(this.state)
    //   }


    updateRed(value) {
        this.setState({ red: value })
    }

    updateGreen(value) {
        this.setState({ green: value })
    }

    updateColor(color, value) {
        const newColors = this.state
        newColors[color] = value
        this.setState(newColors)
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state)
    }

    render() {
        return (
            <div>
                <div style={this.swatchStyle()}></div>
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <ColorInput color='red' value={this.state.red}
                        updateColor={this.updateColor.bind(this)} />
                    <ColorInput color='green' value={this.state.green}
                        updateColor={this.updateColor.bind(this)} />
                    <ColorInput color='blue' value={this.state.blue}
                        updateColor={this.updateColor.bind(this)} />

                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default ColorPicker;