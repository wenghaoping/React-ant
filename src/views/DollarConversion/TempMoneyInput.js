import React from 'react';
const scaleNames = {
    D: 'Dollar', // 美元
    R: 'Rmb' // 人民币
};
export default class TempMoneyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {howMuch: ''};
    }
    handleChange = (e) => {
        this.props.onMoneyChange(e.target.value); // 当输入的时候，传递改变
    }
    render() {
        const howMuch = this.props.howMuch; // 输入多少钱
        const scale = this.props.scale; // 是输入美元还是人民币
        return (
            <div>
                <h1>请输入{scaleNames[scale]}</h1>
                <input value={howMuch} onChange={this.handleChange}/>
            </div>
        );
    }
}