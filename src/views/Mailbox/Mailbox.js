/**
 * Created by Admin on 2018/2/26.
 */
import React from 'react';
export default class Mailbox extends React.Component {

    render(){

        const unreadMessages = this.props.unreadMessages;
        return (
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
                }
            </div>
        );
    }
}