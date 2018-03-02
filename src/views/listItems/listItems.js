/**
 * Created by Admin on 2018/2/26.
 */
import React from 'react';
const numbers = [1, 2, 3, 4, 5];
const list = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
);
export default class ListItems extends React.Component {
    render(){
        return (
            <ul>
                {list}
            </ul>
        )
    }
}