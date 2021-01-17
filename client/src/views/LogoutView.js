import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {Button, Divider} from "antd";
import React from 'react';
import {logoutUser} from "../store/user/actions";

const logoutPageStyle = {
    margin: '4rem auto',
    width: '30rem',
    height: '22rem',
    backgroundColor: 'white',
    borderRadius: '1rem'
}

const titleStyle = {
    fontFamily: 'Open Sans',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '27px',
    marginBottom: '2rem'
}

export const LogoutView = () => {
    const user = useSelector((state) => state.userModule.authorizedUser);

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };

    if (!user) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div style={logoutPageStyle}>
            <div className={'title-wrapper'} style={{padding: '1rem 0'}}>
                <span style={titleStyle}>Logout from this device?</span>
                <Divider/>
            </div>
            <Button onClick={logout}>Logout</Button>
        </div>
    );
};