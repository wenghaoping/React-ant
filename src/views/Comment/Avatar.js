/**
 * Created by Admin on 2018/2/26.
 */
import React from 'react';
export default class Avatar extends React.Component {
    render(){
        return (
            <img className="Avatar"
                 src={this.props.user.avatarUrl}
                 alt={this.props.user.name}
            />
        )
    }
}