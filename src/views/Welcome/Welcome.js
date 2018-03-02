/**
 * Created by Admin on 2018/2/26.
 */
import React from 'react';
export default class Welcome extends React.Component {
    render(){
        console.log('渲染')
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}