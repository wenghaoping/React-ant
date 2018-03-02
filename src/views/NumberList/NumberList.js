/**
 * Created by Admin on 2018/2/26.
 */
import React from 'react';
export default class NumberList extends React.Component {
    render(){
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
            <li key={number.toString()}>{number}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}