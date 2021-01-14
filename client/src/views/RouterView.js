import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Menu} from "antd";
import BlogView from "./BlogView";
import GalleryView from "./GalleryView";
import InfoView from "./InfoView";
import {Redirect} from "react-router";
import {CollectionView} from "./CollectionView";
import {LoginView} from "./LoginView";
import {useSelector} from "react-redux";
import {RegisterView} from "./RegisterView";

const menuStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "space-between"
}

const loginButton = {
    position: 'absolute',
    right: '10%',
    width: '5rem',
    height: '100%',
}

const registerButton = {
    position: 'absolute',
    right: '3%',
    width: '5rem',
    height: '100%',
}

export const RouterView = () => {
    const user = useSelector((store) => store.userModule.authorizedUser);

    return (
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
                {user == null && <button style={loginButton}><Link to="/login">Login</Link></button>}
                {user == null && <button style={registerButton}><Link to="/register">Register</Link></button>}
                {user && <p>{user.username}</p>}
            </Menu>
            <Switch>
                <div className="switch-wrapper">
                    <Route exact path={'/'}>
                        <Redirect to={'/blog'}/>
                    </Route>
                    <Route exact path={'/blog'}>
                        <BlogView/>
                    </Route>
                    <Route exact path={'/gallery'}>
                        <GalleryView/>
                    </Route>
                    <Route exact path={'/collections/:collectionId'}>
                        <CollectionView/>
                    </Route>
                    <Route exact path={'/info'}>
                        <InfoView/>
                    </Route>
                    <Route exact path={'/login'}>
                        <LoginView/>
                    </Route>
                    <Route exact path={'/register'}>
                        <RegisterView/>
                    </Route>
                </div>
            </Switch>
        </Router>
    )
}

