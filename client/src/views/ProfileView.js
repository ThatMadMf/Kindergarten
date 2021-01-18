import {Button, Divider, Form, Input} from "antd";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {changeUserData} from "../store/user/actions";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const profilePageStyle = {
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

const profileFormStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const ProfileView = () => {
    const user = useSelector((state) => state.userModule.authorizedUser);

    const dispatch = useDispatch();

    const {username, firstName, lastName} = user ? user : '';

    const [userFields, userSetters] = useState([
        {
            name: ['username'],
            value: username,
        },
        {
            name: ['firstName'],
            value: firstName,
        },
        {
            name: ['lastName'],
            value: lastName,
        },
    ]);

    const updateInfo = (values) => {
        dispatch(changeUserData(values));
    };

    if (!user) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div style={profilePageStyle}>
            <div className={'title-wrapper'} style={{padding: '1rem 0'}}>
                <span style={titleStyle}>Your data</span>
                <Divider/>
            </div>
            <div style={profileFormStyle}>
                <Form
                    {...layout}
                    name="basic"
                    fields={userFields}
                    onFieldsChange={(formFields) => {
                        userSetters(formFields);
                    }}
                    onFinish={updateInfo}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                    >
                        <Input disabled={true}/>
                    </Form.Item>

                    <Form.Item
                        label="First Name"
                        name="firstName"
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastName"
                    >
                        <Input/>
                    </Form.Item>


                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
