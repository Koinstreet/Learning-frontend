import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Button, Modal, Form, Input, Switch, Upload } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { createCourseAction } from "../actions";
import CourseImage from "./CourseImage";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const CourseModal = (props) => {
  const [courseImage, setCourseImage] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.adminReducer.loading);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onPublish = (checked) => {
    console.log(checked);
  };

  const onSubmit = () => {
    const fieldsValue = form.getFieldsValue();
    if (fieldsValue.published === undefined) fieldsValue.published = false;
    if (fieldsValue.objectives === undefined) {
      fieldsValue.objectives = JSON.stringify([])
    } else {
      fieldsValue.objectives = JSON.stringify(fieldsValue.objectives)
    }
    fieldsValue.image = courseImage;
    console.log(fieldsValue)
    dispatch(createCourseAction(fieldsValue, props.handleOk))
  };

  const setImage = (image) => {
    setCourseImage(image)
  }
  
  return (
    <Modal
      visible={props.visible}
      title="Create Course"
      onOk={onSubmit}
      onCancel={props.handleCancel}
      confirmLoading={loading}
      footer={[
        <Button key="back" onClick={props.handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={onSubmit}
          //   htmlType="submit"
        >
          Create
        </Button>,
      ]}
    >
      <Form
        {...layout}
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Course Image"
          name="image"
          rules={[
            { required: true, message: "Please input your course image!" },
          ]}
        >
          <CourseImage setImage={setImage} />
        </Form.Item>
        <Form.Item
          label="Course name"
          name="name"
          rules={[
            { required: true, message: "Please input your course name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Highlight"
          name="highlight"
          rules={[
            { required: true, message: "Please input your course highlight!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Overview"
          name="overview"
          rules={[
            { required: true, message: "Please input your course overview!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Target Audience"
          name="audience"
          rules={[
            { required: true, message: "Please input your target audience!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Perequisites"
          name="perequisites"
          rules={[
            {
              required: true,
              message: "Please input your course perequisties!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.List name="objectives">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Form.Item
                    {...layout}
                    label={"Objectives"}
                    required={true}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            "Please input an objective name or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="objective" style={{ width: "60%" }} />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        style={{ margin: "0 8px" }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item {...layout} label="Objectives">
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    style={{ width: "60%" }}
                  >
                    <PlusOutlined /> Add Objective
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
        <Form.Item label="Publish" name="published" valuePropName="checked" {...layout}>
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

CourseModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default CourseModal;
