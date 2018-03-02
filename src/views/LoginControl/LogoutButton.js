/**
 * Created by Admin on 2018/2/26.
 */
import React from 'react';
export default class LogoutButton extends React.Component {
    render(){
        return (
            <button onClick={this.props.onClick}>
                Logout
            </button>
        )
    }
}