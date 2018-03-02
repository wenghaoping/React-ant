import React from 'react';
export default class PS extends React.Component {
    render() {
        // if (this.props.money >= 2000) {
        //     return ;
        // }
        // return <p>你这个价格买不起</p>;

        return (
            <div>
                <h1>PlayStation 4价值2000块RMB</h1>
                {
                    this.props.money >= 2000 &&
                    <p>你这个价格买的起</p>
                }
            </div>
        )
    }
}