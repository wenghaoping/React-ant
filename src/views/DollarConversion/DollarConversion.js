// 美元换算组件
import React from 'react';
import TempMoneyInput from './TempMoneyInput';
import PS from './PS';

export default class DollarConversion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scale: 'D', howMuch: ''};
    };
    // 美元转换
    dollarChange = (howMuch) => {
        this.setState({scale: 'D', howMuch});
    };
    // 人民币转换
    rmbChange = (howMuch) => {
        this.setState({scale: 'R', howMuch});
    };

    render() {
        const scale = this.state.scale;
        const howMuch = this.state.howMuch;
        const dollar = scale === 'R' ? tryConvert(howMuch, RToDollar) : howMuch;
        const rmb = scale === 'D' ? tryConvert(howMuch, dToRmb) : howMuch;
        return (
            <div>
                <TempMoneyInput scale="D"
                                  howMuch={dollar}
                                  onMoneyChange={this.dollarChange} />
                <TempMoneyInput scale="R"
                                  howMuch={rmb}
                                  onMoneyChange={this.rmbChange} />

                <PS money={rmb}/>
            </div>
        );
    }
}
// 美元转人民币
function dToRmb(money) {
    return (money * 6.3302);
}

// 人民币转美元
function RToDollar(money) {
    return (money * 0.158);
}
// 总转换函数
function tryConvert(money, convert) {
    const input = parseFloat(money);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    return output.toString();
}