import { Form, Input, InputNumber, Button } from 'antd';
import React, { Component } from 'react';
import './Constact.css';
import Navbar from './Navbar';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  layout: 'vertical'
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Con = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <div className="hc-form">
      <div className="ctext">Constact us</div>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label={<span className="cform">Name</span>} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label={<span className="cform">Email</span>} rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'phonenumber']} label={<span className="cform">  Phone Number</span>}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'reason']} label={<span className="cform">Reason for contacting</span>}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

class Constact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Contents">
          <Con />
        </div>
      </div>
    );
  }
}

export default Constact;