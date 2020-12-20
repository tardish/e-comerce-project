import React from "react";
import "./App.css";
import {
  Layout,
  Menu,
  Row,
  Avatar,
  Col,
  Space,
  Divider,
} from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import LocalStorageService from "./services/localStorageService";
import {Link } from "react-router-dom";

export default function Navbar() {
  const { Header } = Layout;
  const logout = () => {
    LocalStorageService.removeToken();
    window.location.reload();
  };

  return (
    <Header className="navHead">
      <Space align="end" split={<Divider type="vertical" />}>
        <Row className="nav">
          <Col className="nav">
            <a className="home" href="/">
              Home
            </a>
          </Col>
          <Col className="nav">
            <Menu className="nav" theme="dark" mode="horizontal">
              <span className="nav">
                <Link to ='/cart' >
                  <Avatar
                    className="nav"
                    style={{ margin: "0 5px" }}
                    icon={<ShoppingCartOutlined />}
                  /></Link>
              </span>
              <Link to ='/profile' >
              <Avatar
                className="nav"
                icon={<UserOutlined />}
              /></Link>
              <Menu.Item style={{ padding: "0 5px" }}>
                <a className="nav" href="/login">
                  Sign In
                </a>
              </Menu.Item>
              <Menu.Item style={{ padding: "0 5px" }}>
                <a href="/register" className="nav">
                  Register
                </a>
              </Menu.Item>
              <Menu.Item style={{ padding: "0 5px" }}>
                <a href="/register" className="nav" onClick={logout}>
                  logout
                </a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Space>
    </Header>
  );
}
