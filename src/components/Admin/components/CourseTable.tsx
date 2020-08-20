import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Popover, Row, Col, Space, Modal, Tag } from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import { deleteCourseAction } from "../actions";

const Content = ({ id }) => {
  const dispatch = useDispatch();

  const onDeleteCourse = (id, resolve, reject) => {
    return dispatch(deleteCourseAction(id, resolve, reject));
  };
  function confirm(id) {
    Modal.confirm({
      title: "Delete Course?",
      icon: <ExclamationCircleOutlined />,
      content: "Course created successfully, Add Modules now ?",
      okText: "Yes",
      onOk() {
        return new Promise((resolve, reject) => {
          return onDeleteCourse(id, resolve, reject);
          // setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
        // onDeleteCourse(id)
      },
    });
  }

  return (
    <Row>
      <Space>
        <Col className="pr-2">
          <Link to={`/admin/dashboard/course/${id}`}>
            <EditOutlined style={{ color: "#F2C94C", fontSize: 20 }} />
          </Link>
        </Col>
        <Col className="pl-2">
          <DeleteOutlined
            style={{ color: "#EB5757", fontSize: 20 }}
            onClick={() => confirm(id)}
          />
        </Col>
      </Space>
    </Row>
  );
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    ellipsis: true,
  },
  {
    title: "Highlight",
    dataIndex: "highlight",
    key: "highlight",
    ellipsis: true,
  },
  { title: "Overview", dataIndex: "overview", key: "overview", ellipsis: true },
  { title: "Audience", dataIndex: "audience", key: "audience", ellipsis: true },
  {
    title: "Published",
    dataIndex: "published",
    key: "published",
    render: (data: any) => {
      let color = "geekblue";
      if (!data) color = "volcano";
      return (
        <Tag color={color}>
          {data ? "published" : "not published"}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    key: "operation",
    fixed: true,
    width: 100,
    render: (data: any) => {
      return (
        <Popover content={() => <Content id={data.id} />} trigger="click">
          <EyeOutlined style={{ color: "#1890ff" }} />
        </Popover>
      );
    },
  },
];

const CourseTable = () => {
  const courses = useSelector((state) => state.allCourses.courses);
  return (
    <div>
      <Table dataSource={courses} columns={columns} scroll={{ x: 700 }} />;
    </div>
  );
};

export default CourseTable;
