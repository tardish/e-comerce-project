import React, { useState, Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Form, Input, Button, Checkbox ,notification} from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import axios from './config/axios'
import LocalStorageService from './services/localStorageService';
import { withRouter } from 'react-router-dom';
  
function Login(props)  {
  const onFinish = (values) => {
    const body = {
      email: values.email,
      password: values.password,
    };
    axios.post("/accounts/login", body)
    .then(result => {
      LocalStorageService.setToken(result.data.token);
      props.setRole("user")
      props.history.push("/home");
    })
    .catch(err => {
      notification.error({
        message: ` login failed` ,
      });
    })
  };
  return (
    <div>
    <Navbar />
    <div className="Contents">
    <div >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1 className="hform">Login your account</h1>
        <div className="tform">Email</div>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <div className="tform">Password</div>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item className="login-form-remember" name="remember" valuePropName="checked" noStyle>
            <Checkbox >Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
        </a>
        </Form.Item>

        <Form.Item className="tlogin">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
        </Button>
        Or <a href="">register now!</a>
        </Form.Item>
      </Form></div>
      </div>
      </div>
  );
};



export default  withRouter(Login);