import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Row, Col } from "reactstrap";
import { toastr } from 'react-redux-toastr'
const FormItem = Form.Item;


class LoginFormContainer extends Component {


    handleSubmit = () => {
       
        this.props.form.validateFields((err) => {
            if (err) {
                toastr.warning('Login', 'Please complete the required fields (*)', { timeOut: 3000, });
            }else {

            }
        })

    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Row style={{ margin: "0 auto" }}>
                    <Col xs="12" sm="12" md="12">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                        </FormItem>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                        <FormItem>
                            <a href="/">Forgot the password?</a>
                        </FormItem>
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in<Icon type="right-circle-o" />
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }

}

const LoginForm = Form.create()(LoginFormContainer);

export default LoginForm;