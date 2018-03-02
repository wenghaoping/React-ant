/**
 * Created by Admin on 2018/2/26.
 */
import React from 'react';
export default class MessageBox extends React.Component {
    state = {
        count: 0,
        time: ''
    }
    componentWillMount(){
        console.log('componentWillMount');
        var self = this;

        this.timer = setInterval(function(){
            self.setState({
                count: self.state.count + 1,
                time: new Date().toLocaleTimeString(),
            })
        },1000);

    }
    componentDidMount(){
        console.log('componentDidMount')
        // console.log(this.getDOMNode() );
    }
    componentWillUnmount(){
        alert('you are tring to kill me !! ')

        clearInterval(this.timer);

    }
    killMySelf(){
        // ReactDOM.unmountComponentAtNode(  document.getElementById('app') );
    }
    render(){
        // console.log('渲染')
        return (
            <div>
                <h1 > 计数： {this.state.count}</h1>
                <button onClick={this.killMySelf}>卸载掉这个组件</button>
                <h2>It is {this.state.time}.</h2>
            </div>
        )
    }
}
