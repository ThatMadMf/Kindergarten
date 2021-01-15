import {Form, Input, Button, Divider} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import React from 'react';
import {registerUser} from "../store/user/actions";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const registerPageStyle = {
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

const registerFormStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const RegisterView = () => {

    const user = useSelector((state)=> state.userModule.authorizedUser);
    const dispatch = useDispatch();

    const register = (values) => {
        dispatch(registerUser(values))
    };

    if (user) {
        return <Redirect to={'/blog'} />
    }

    return (
        <div className={'register-page-wrapper'} style={registerPageStyle}>
            <div className={'title-wrapper'} style={{padding: '1rem 0'}}>
                <span style={titleStyle}>Enter your registration data</span>
                <Divider/>
            </div>
            <div style={registerFormStyle}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={register}
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

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};