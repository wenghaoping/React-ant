import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
export default class TopHeader extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                theme="dark">
                <Menu.Item key="mail">
                    <Link to="/test1"><Icon type="mail" />测试1</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to="/test2"><Icon type="appstore" />测试2</Link>
                </Menu.Item>
            </Menu>
        );
    }
}