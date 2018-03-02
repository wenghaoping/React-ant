/**
 * Created by Admin on 2018/2/26.
 */
import React from 'react';
import UserInfo from './UserInfo'
import './index.scss';
export default class Comment extends React.Component {
    render(){
        console.log('渲染')
        return (
            <div className="Comment">
                <UserInfo user={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.props.date)}
                </div>
            </div>
        )
    }
}

function formatDate(date) {
    return date.toLocaleDateString();
}