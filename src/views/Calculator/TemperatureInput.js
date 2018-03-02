import React from 'react';
const scaleNames = {
    c: 'Celsius', // 摄氏度
    f: 'Fahrenheit' // 华氏度
};

export default class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <legend>在{scaleNames[scale]}:中输入温度数值</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </div>
        );
    }
}