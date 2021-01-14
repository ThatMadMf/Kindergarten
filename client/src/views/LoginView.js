import {Form, Input, Button, Checkbox, Divider} from 'antd';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const loginPageStyle = {
    marginTop: '4rem',
    margin: 'auto',
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
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};