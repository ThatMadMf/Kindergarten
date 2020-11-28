import React from 'react';
import {BrowserRouter as Router, Link, Switch} from "react-router-dom";
import {Menu} from "antd";

export const RouterView = () =>
    <Router>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
                <Link to="/">nav 1</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/">nav 2</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/">nav 3</Link>
            </Menu.Item>
        </Menu>
        <Switch>
            <div className="switch-wrapper">
            </div>
        </Switch>
    </Router>
