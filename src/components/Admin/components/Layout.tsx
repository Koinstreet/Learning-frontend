import React, {useEffect, useState} from "react";
import Navigation from "./Navigation";
import useReactRouter from 'use-react-router';

import { Layout, Menu, Breadcrumb, PageHeader } from "antd";
import AdminHeader from "./AdminHeader";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminLayout = (props) => {
  const [pageName, setPageName] = useState("Dashboard");
  const { history } = useReactRouter();
  const {location: {pathname}} = history;
  // "/admin/dashboard"
  useEffect(() => {
    if(pathname === "/admin/dashboard") {
      setPageName("Dashboard")
    } else {
      setPageName("Course")
    }
  }, [pathname])
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navigation />
      <Layout className="site-layout">
        <PageHeader
          ghost={false}
          // backIcon={true}
          onBack={() => window.history.back()}
          title={pageName}
          // subTitle="This is a subtitle"
          extra={[<AdminHeader />]}
        >
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {props.children}
            </div>
          </Content>
        </PageHeader>
          <Footer style={{ textAlign: "center" }}>
            Koinstreet ©2020
          </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
