import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Menu} from "antd";
import BlogView from "./BlogView";
import GalleryView from "./GalleryView";
import InfoView from "./InfoView";

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
                <Route exact path={'/blog'}>
                    <BlogView/>
                </Route>
                <Route exact path={'/gallery'}>
                    <GalleryView/>
                </Route>
                <Route exact path={'/info'}>
                    <InfoView/>
                </Route>
            </div>
        </Switch>
    </Router>
