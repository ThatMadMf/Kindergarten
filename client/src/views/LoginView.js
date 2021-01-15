import {Form, Input, Button, Checkbox, Divider} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../store/user/actions";
import {Redirect} from "react-router";
import React from "react";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const loginPageStyle = {
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

const loginFormStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const LoginView = () => {
    const user = useSelector((state) => state.userModule.authorizedUser);

    const dispatch = useDispatch();

    const login = (values) => {
        dispatch(loginUser(values));
    };

    if (user) {
        return <Redirect to={'/blog'}/>
    }

    return (
        <div style={loginPageStyle}>
            <div className={'title-wrapper'} style={{padding: '1rem 0'}}>
                <span style={titleStyle}>Enter your login data</span>
                <Divider/>
            </div>
            <div style={loginFormStyle}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={login}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};