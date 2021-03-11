import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tag, Space, Table, Modal, Button } from "antd";
import {
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import { deleteModuleAction } from "../../actions";

import ModuleModal from "../ModuleModal";

const columns = [
  {
    title: "Module Name",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Module type",
    key: "type",
    dataIndex: "type",
    render: (type) => {
      let color = "geekblue";
      if (type === "video") color = "volcano";
      if (type === "text") color = "green";
      return (
        <Tag color={color} key={type}>
          {type.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => <ModuleActions text={text} data={record} />
  },
];

const ModuleActions = ({text, data}) => {
  const [moduleLoading, setModuleLoading] = useState(false);
  const [moduleVisible, setModuleVisible] = useState(false);
  const dispatch = useDispatch();

  const onDeleteModule = (resolve, reject) => {
    return dispatch(deleteModuleAction(data._id, data.courseId, resolve, reject))
  };

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

  function confirm() {
    Modal.confirm({
      title: "Delete Module?",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure ?",
      okText: "Yes",
      onOk() {
        return new Promise((resolve, reject) => {
          return onDeleteModule(resolve, reject)
        }).catch(() => console.log("Oops errors!"));
      },
    });
  }

  return (
    <Space size="middle">
      <Button type="primary" ghost onClick={showModuleModal}>Edit</Button>
      <Button danger onClick={confirm}>Delete</Button>
      {moduleVisible && <ModuleModal
        visible={moduleVisible}
        loading={moduleLoading}
        handleCancel={handleModuleCancel}
        handleOk={handleModuleOk}
        edit
        module={data}
      />}
    </Space>
  )
}

const ModulesTable = ({modules}) => {
  return (
    <div>
      <Table columns={columns} dataSource={modules} scroll={{ x: 500 }}/>
    </div>
  );
};

export default ModulesTable;
