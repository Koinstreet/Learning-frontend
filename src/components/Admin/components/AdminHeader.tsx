import React from "react";

import { Layout, Typography, Col, Row, Avatar } from "antd";

const { Header } = Layout;
const { Text, Link } = Typography;

const AdminHeader = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Row justify="end">
        <Col className="pr-3">Admin</Col>
        <Col className="pr-5">
          <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
            U
          </Avatar>
        </Col>
      </Row>
    </Header>
  );
};

export default AdminHeader;
