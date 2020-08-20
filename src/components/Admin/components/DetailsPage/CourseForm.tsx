import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Button, Form, Input, Switch, message } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { editCourseAction } from "../../actions";
import CourseImage from "../CourseImage";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const CourseModal = (props) => {
  const [courseImage, setCourseImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const fillForm = () => {
    console.log(props.course.published);
    form.setFieldsValue({
      ...props.course,
    });
    setCourseImage(props.course.image);
  };

  useEffect(() => {
    if (props.course) {
      fillForm();
    }
  }, [props.course]);

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
      fieldsValue.objectives = JSON.stringify([]);
    } else {
      fieldsValue.objectives = JSON.stringify(fieldsValue.objectives);
    }
    fieldsValue.image = courseImage;
    setLoading(true);
    dispatch(
      editCourseAction(
        props.course.id,
        fieldsValue,
        () => {
          setLoading(false);
          message.success("Course updated succesfully");
        },
        () => {
          setLoading(false);
          message.error("Something went wrong");
        }
      )
    );
  };

  const setImage = (image) => {
    console.log(image)
    setCourseImage(image);
  };

  return (
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
        rules={[{ required: true, message: "Please input your course image!" }]}
      >
        <CourseImage setImage={setImage} image={courseImage} />
      </Form.Item>
      <Form.Item
        label="Course name"
        name="name"
        rules={[{ required: true, message: "Please input your course name!" }]}
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
      <Form.Item
        label="Publish"
        name="published"
        valuePropName="checked"
        {...layout}
      >
        <Switch />
      </Form.Item>

      <Form.Item {...layout}>
        <Button type="primary" onClick={onSubmit} loading={loading}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CourseModal;
