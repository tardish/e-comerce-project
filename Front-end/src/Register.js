import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { Form, Input, Checkbox, Button ,notification} from "antd";
import axios from './config/axios'
import { withRouter } from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Register(props) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const body = {
      email: values.email,
      password: values.password,
      firstname: values.firstname,
      lastname: values.lastname,
      address: values.address,
      phone: values.phone,
    };
    axios.post("/accounts/register", body)
    .then(res => {
      notification.success({
        message: `${values.firstname} register has been completed` ,
      });
      props.history.push("/login");
    })
    .catch(err => {
      notification.error({
        message: `${values.firstname} register failed` ,
      });
    })
  };

  return (
    <div>
    <Navbar />
    <div className="Contents">
    <Form
      className="tform"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "66",
      }}
      scrollToFirstError
    >
      <div>
        <h1 className="hform">Create new account</h1>
      </div>

      <Form.Item
        name="email"
        label={<span className="tform">E-mail</span>}
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="E-mail" />
      </Form.Item>

      <Form.Item
        name="password"
        label={<span className="tform">Password</span>}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password " />
      </Form.Item>

      <Form.Item
        name="confirm"
        label={<span className="tform">Confirm Password</span>}
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item
        name="firstname"
        label={<span className="tform">Firstname</span>}
        rules={[
          {
            required: true,
            message: "Please input your Firstname!",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="First name" />
      </Form.Item>

      <Form.Item
        name="lastname"
        label={<span className="tform">Lastname</span>}
        rules={[
          {
            required: true,
            message: "Please input your Lastname!",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Lastname" />
      </Form.Item>

      <Form.Item
        name="address"
        label={<span className="tform">Address</span>}
        rules={[
          {
            required: true,
            message: "Please input your address!",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Address" />
      </Form.Item>

      <Form.Item
        name="phone"
        label={<span className="tform">Phone Number</span>}
        rules={[
          { required: true, message: "Please input your phone number!" },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if ( !isNaN(value) ) {
                return Promise.resolve();
              }

              return Promise.reject('Please input number!');
            },
          }),
      
      ]}
      >
        <Input placeholder="Phone Number" />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject("Should accept agreement"),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          <a className="tform" href="">
            {" "}
            I have read the agreement
          </a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button className="buttons" type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
      </div>
  );
};


export default  withRouter(Register);
