import React from 'react';
export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (item, event) =>{
        console.log(item);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    handleClick2 = (event, item) =>{
        console.log(item);
    }
    handleClick3 () {
        console.log('我是最原始的')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button onClick={this.handleClick.bind(this, 123)}>
                    123
                </button>
                <button onClick={(event, item) => {this.handleClick2(event, 321)}}>
                    321
                </button>
            </div>
        );
    }
}