import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Menu} from "antd";
import BlogView from "./BlogView";
import GalleryView from "./GalleryView";
import InfoView from "./InfoView";
import {Redirect} from "react-router";

const menuStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "space-between"
}

export const RouterView = () =>
    <Router>
        <Menu theme="light" mode="horizontal" style={menuStyle}>
            <Menu.Item key="1">
                <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/gallery">Gallery</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/info">Info</Link>
            </Menu.Item>
        </Menu>
        <Switch>
            <div className="switch-wrapper">
                <Route exact path={'/'}>
                    <Redirect to={'/blog'} />
                </Route>
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
