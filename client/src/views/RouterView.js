import React from 'react';
import {BrowserRouter as Router, Link, Switch} from "react-router-dom";
import {Menu} from "antd";

const menuStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "space-between"
}

export const RouterView = () =>
    <Router>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={menuStyle}>
            <Menu.Item key="1">
                <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item key="2" disabled={true}>
                <Link to="/gallery">Gallery</Link>
            </Menu.Item>
            <Menu.Item key="3" disabled={true}>
                <Link to="/info">Info</Link>
            </Menu.Item>
        </Menu>
        <Switch>
            <div className="switch-wrapper">
            </div>
        </Switch>
    </Router>
