import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import {
  Typography,
  Divider,
  Row,
  Col,
  Form,
  Input,
  Switch,
  Button,
  Card,
  Spin,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

// Actions
import { actions } from "../../CourseOverview";
import { actions as moduleActions } from "../../CourseView";

import Layout from "./Layout";

import CourseForm from "./DetailsPage/CourseForm";
import ModulesTable from "./DetailsPage/ModulesTable";
import ModuleModal from "./ModuleModal";

const { getCourseAction } = actions;
const { getModulesAction } = moduleActions;

const { Title } = Typography;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const CourseDetails = (props) => {
  const [moduleLoading, setModuleLoading] = useState(false);
  const [moduleVisible, setModuleVisible] = useState(false);

  const dispatch = useDispatch();
  const { course, loading } = useSelector((state) => state.currentCourse);
  const courseModules = useSelector((state) => state.courseModules);
  useEffect(() => {
    dispatch(getCourseAction(parseInt(props.match.params.id)));
    dispatch(getModulesAction(parseInt(props.match.params.id)));
  }, [dispatch, props.match.params.id]);

  const showModuleModal = () => {
    console.log("here");
    setModuleVisible(true);
  };

  const handleModuleOk = () => {
    setModuleLoading(true);
    setTimeout(() => {
      setModuleLoading(false);
      setModuleVisible(false);
    }, 3000);
  };

  const handleModuleCancel = () => {
    setModuleVisible(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onPublish = (checked) => {
    console.log(checked);
  };
  return (
    <Layout>
      
      {course && !loading && <Title level={3}>{course.name}</Title>}
      <Row justify="end" className="pb-5">
        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={showModuleModal}
          >
            Add Module
          </Button>
        </Col>
      </Row>
      <Row   gutter={[8, 8]}>
        <Col xl={12} span={24}>
          <Card title="Course Details">
            {course && !loading && <CourseForm course={course} />}
            {loading && (
              <div className="d-flex justify-content-center">
                <Spin size="large" />
              </div>
            )}
          </Card>
        </Col>
        {/* <Col span={1} style={{ height: "100%" }}>
          <Divider type="vertical" />
        </Col> */}
        <Col xl={12} span={24}>
          <Card title="Module Details">
            {courseModules.modules.length > 0 && !courseModules.loading && (
              <ModulesTable modules={courseModules.modules} />
            )}
            {courseModules.loading && (
              <div className="d-flex justify-content-center">
                <Spin size="large" />
              </div>
            )}
          </Card>
        </Col>
      </Row>
      <ModuleModal
        courseId={props.match.params.id}
        visible={moduleVisible}
        loading={moduleLoading}
        handleCancel={handleModuleCancel}
        handleOk={handleModuleOk}
      />
    </Layout>
  );
};

export default CourseDetails;
