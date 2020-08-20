import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { Button, Row, Col, Modal } from "antd";
import { PlusOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

import { action } from "../../Home";
import Layout from "./Layout";
import CourseTable from "./CourseTable";
import CourseModal from "./CourseModal";
import ModuleModal from "./ModuleModal";

const { getAdminCoursesAction } = action;

const Dashboard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [moduleLoading, setModuleLoading] = useState(false);
  const [moduleVisible, setModuleVisible] = useState(false);

  const course = useSelector(state => state.currentCourse.course);

  const { history, location, match } = useReactRouter();

  console.log(course)
  // Actions
useEffect(() => {
    dispatch(getAdminCoursesAction());
  }, [dispatch]);

  const showModal = () => {
    setVisible(true);
  };

  const showModuleModal = () => {
    console.log(course)
    // setModuleVisible(true);
  };

  const handleOk = (id) => {
    setVisible(false);
    confirm(id);
  };

  const handleModuleOk = () => {
    setModuleLoading(true);
    setTimeout(() => {
      setModuleLoading(false);
      setModuleVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleModuleCancel = () => {
    setModuleVisible(false);
  };

  function confirm(id) {
    Modal.confirm({
      title: "Success",
      icon: <ExclamationCircleOutlined />,
      content: "Course created successfully, Add Modules now ?",
      okText: "Yes",
      cancelText: "Later",
      onOk() {
        // showModuleModal()
        console.log(id)
        history.push(`/admin/dashboard/course/${id}`)
      },
    });
  }

  return (
    <Layout>
      <Row justify="start" className="pb-5">
        <Col>
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Create Course
          </Button>
        </Col>
      </Row>
      <CourseModal
        visible={visible}
        loading={loading}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
      <CourseTable />
    </Layout>
  );
};

export default Dashboard;
