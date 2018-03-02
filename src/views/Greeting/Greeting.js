/**
 * Created by Admin on 2018/2/26.
 */
import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';
export default class Greeting extends React.Component {
    render(){
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }
}