import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// functions
import { signinAction } from '../actions';

import {
  Row,
  Col,
  Form,
  Checkbox,
  Input,
  Button,
  Card,
  Typography,
} from "antd";
const { Title } = Typography;

const AdminSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.auth)

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(signinAction(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
        <Card style={{ width: "30%" }}>
          <Title level={3} style={{ textAlign: "center" }}>
            Admin
          </Title>
          <Title style={{ textAlign: "center", marginTop: 0 }}>Signin</Title>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={loading}>
                Signin
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </div>
  );
};

export default AdminSignin;
