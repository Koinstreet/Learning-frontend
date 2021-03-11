import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Player, BigPlayButton } from "video-react";
import ReactPlayer from "react-player";
import validator from "validator";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import { hot } from "react-hot-loader";
import screenfull from "screenfull";
import { FormInstance } from "antd/lib/form";

import {
  Button,
  Modal,
  Form,
  Input,
  Radio,
  Upload,
  Space,
  message,
  Row,
  Col,
  Divider,
} from "antd";
import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import { createModuleAction, editModuleAction } from "../actions";
import { truncate } from "fs";

const { Dragger } = Upload;

const { TextArea } = Input;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

interface Props {
  courseId: number;
  visible: boolean;
  loading: boolean;
  handleOk(): any;
  handleCancel(): any;
  createModule?: any;
  editModule?: any;
  edit?: any;
  module?: any;
}

interface State {
  text: any;
  name: any;
  type: string;
  pip: boolean;
  playing: boolean;
  controls: boolean;
  light: boolean;
  volume: number;
  muted: boolean;
  played: number;
  loaded: number;
  duration: number;
  playbackRate: number;
  loop: boolean;
  seeking: boolean;
  loading: boolean;
  questions: any;
}

interface IData {
  name: string;
  type: string;
  content: object;
}

const fileProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Text = ({ text, onTextChange, type }) => {
  return (
    <Form.Item
      label={type === "text" ? "Module Text" : "Module Video"}
      name={type === "text" ? "moduletext" : "moduletext"}
      rules={[{ required: true, message: "Please input a text!" }]}
    >
      <span>
        {type === "text" ? (
          <TextArea
            placeholder="Text content"
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={onTextChange}
            value={text}
          />
        ) : (
          <Input
            placeholder="video link"
            onChange={onTextChange}
            value={text}
          />
        )}
      </span>
    </Form.Item>
  );
};

const Video = () => {
  return (
    <Form.Item
      label="Module Video"
      name="modulevideo"
      rules={[{ required: true, message: "Please input your module video!" }]}
    >
      <Dragger {...fileProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </Form.Item>
  );
};

const Quiz = ({ questions, addQuestion, removeQuestion, onQuestionChange, onOptionChange, onAnsChange }) => {
  return (
    <div>
      <Form.Item
        label={"Questions"}
        name={"questions"}
        rules={[{ required: true, message: "Please input a text!" }]}
      >
        <span>
          <div>
            {questions.map((el, i) => (
              <Form.Item
                label={i + 1}
                name={`question${i + 1}`}
                rules={[
                  { required: true, message: "Please input a question!" },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input placeholder={`Question ${i + 1}`} value={el.quest} onChange={(e) => onQuestionChange(e, i)} />
                <Row gutter={4} className="py-2">
                  <Col span={12}>
                    <Input placeholder="Option A" value={el.options.a} onChange={(e) => onOptionChange(e, i, "a")}/>
                  </Col>
                  <Col span={12}>
                    <Input placeholder="Option B" value={el.options.b} onChange={(e) => onOptionChange(e, i, "b")}/>
                  </Col>
                </Row>
                <Row gutter={4}>
                  <Col span={12}>
                    <Input placeholder="Option C" value={el.options.c} onChange={(e) => onOptionChange(e, i, "c")}/>
                  </Col>
                  <Col span={12}>
                    <Input placeholder="Option D" value={el.options.d} onChange={(e) => onOptionChange(e, i, "d")}/>
                  </Col>
                </Row>
                <Radio.Group value={el.ans} defaultValue={"a"} onChange={(e) => onAnsChange(e, i)}>
                  <Radio value="a">a</Radio>
                  <Radio value="b">b</Radio>
                  <Radio value="c">c</Radio>
                  <Radio value="d">d</Radio>
                </Radio.Group>
                <div className="py-2">
                  <Button
                    type="dashed"
                    onClick={() => {
                      removeQuestion(i);
                    }}
                    block
                    danger
                  >
                    <PlusOutlined /> Remove Question
                  </Button>
                </div>
                <Divider />
              </Form.Item>
            ))}
            <div className="py-2">
              <Button
                type="primary"
                onClick={() => {
                  addQuestion();
                }}
                block
              >
                <PlusOutlined /> Add Question
              </Button>
            </div>
          </div>
        </span>
      </Form.Item>
    </div>
  );
};

class ModuleModal extends Component<Props, State> {
  player: any;
  refs: any;
  formRef: any = React.createRef<FormInstance>();

  state = {
    text: "",
    name: "",
    type: "quiz",
    pip: false,
    playing: true,
    controls: true,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
    loading: false,
    questions: [
      {
        quest: "",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        ans: "a",
      },
    ],
  };

  componentDidMount() {
    if (this.props.edit && this.props.module) {
      console.log(this.state);
      this.setState({
        name: this.props.module.name,
        type: this.props.module.type,
      });
      if (this.props.module.type === "text") {
        console.log(this.props.module.content);
        this.setState({ text: this.props.module.content.text });
      } else if (this.props.module.type === "video") {
        this.setState({ text: this.props.module.content.link });
      } else if (this.props.module.type === "quiz") {
        this.setState({ questions: this.props.module.content.questions });
      }
    }
  }

  addQuestion = () => {
    const newQuestion = [
      ...this.state.questions,
      {
        quest: "",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        ans: "a",
      },
    ];
    this.setState({ questions: newQuestion });
  };

  removeQuestion = (index) => {
    const newQuestion = [
      ...this.state.questions.slice(0, index),
      ...this.state.questions.slice(index + 1),
    ];
    this.setState({ questions: newQuestion });
  };

  onQuestionChange = (e, i) => {
    const newQuestion = [...this.state.questions]
    newQuestion[i].quest = e.target.value;
    this.setState({questions: newQuestion})
  }

  onOptionChange = (e, i, option) => {
    const newQuestion = [...this.state.questions];
    const newOptions = {...newQuestion[i].options};
    newOptions[option] = e.target.value;
    newQuestion[i].options = newOptions;
    this.setState({questions: newQuestion})
  }

  onAnsChange = (e, i) => {
    const newQuestion = [...this.state.questions]
    newQuestion[i].ans = e.target.value;
    this.setState({questions: newQuestion})
  }

  onSubmit = () => {
    const formValues = this.formRef.current.getFieldsValue();
    const data: IData = { name: "", type: "", content: {} };
    data.name = this.state.name;
    data.type = this.state.type;
    let content;
    if (data.type === "text") {
      content = {
        text: this.state.text,
      }; 
    } else if (data.type === "video") {
      content = {
        link: this.state.text,
      };
    } else if (data.type === "quiz") {
      content = {
        questions: this.state.questions
      }
    }
    data.content = content;
    this.setState({ loading: true });

    if (this.props.edit) {
      this.props.editModule(
        this.props.module._id,
        this.props.module.courseId,
        data,
        () => {
          // this.formRef.current.resetFields();
          // this.setState({loading: false,text: "", name: "", type: "text"});
          this.props.handleCancel();
          message.success("Module edited succesfully");
        },
        () => {
          this.setState({ loading: false });
          message.error("Something went wrong");
        }
      );
    } else {
      this.props.createModule(
        this.props.courseId,
        data,
        () => {
          this.formRef.current.resetFields();
          this.resetFields();
          message.success("Module created succesfully");
        },
        () => {
          this.setState({ loading: false });
          message.error("Something went wrong");
        }
      );
    }
  };

  resetFields = () => {
    this.setState({ loading: false, text: "", name: "", type: "text", questions: [{
      quest: "",
      options: {
        a: "",
        b: "",
        c: "",
        d: "",
      },
      ans: "a",
    }] });
  }

  onTypeChange = (e) => {
    this.setState({ type: e.target.value });
  };

  onTextChange = ({ target: { value } }) => {
    // console.log(validator.isURL(value));
    this.setState({ text: value }, () => {
      if (validator.isURL(value)) {
        // this.player.load();
      }
    });
  };

  onNameChange = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  load = (url) => {
    this.setState({
      text: url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleStop = () => {
    this.setState({ text: null, playing: false });
  };

  handleToggleControls = () => {
    const text = this.state.text;
    this.setState(
      {
        controls: !this.state.controls,
        text: null,
      },
      () => this.load(text)
    );
  };

  handleToggleLight = () => {
    this.setState({ light: !this.state.light });
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleVolumeChange = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  handleSetPlaybackRate = (e) => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };

  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  handleEnablePIP = () => {
    console.log("onEnablePIP");
    this.setState({ pip: true });
  };

  handleDisablePIP = () => {
    console.log("onDisablePIP");
    this.setState({ pip: false });
  };

  handlePause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };

  handleSeekMouseDown = (e) => {
    this.setState({ seeking: true });
  };

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleProgress = (state) => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleEnded = () => {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  };

  handleDuration = (duration) => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };

  // handleClickFullscreen = () => {
  //   screenfull.request(findDOMNode(this.player))
  // }

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    const {
      text,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip,
    } = this.state;
    const SEPARATOR = " · ";
    return (
      <Modal
        visible={this.props.visible}
        title={this.props.edit ? "Edit Module" : "Create Module"}
        onOk={this.onSubmit}
        okText={this.props.edit ? "Save" : "Create"}
        onCancel={this.props.handleCancel}
        confirmLoading={this.state.loading}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          ref={this.formRef}
        >
          <Form.Item
            label="Module Type"
            name="moduletype"
            rules={[
              { required: true, message: "Please input your module type!" },
            ]}
            valuePropName="checked"
          >
            <Radio.Group
              onChange={this.onTypeChange}
              value={this.state.type}
              defaultValue={"text"}
            >
              <Radio value={"text"}>Text</Radio>
              <Radio value={"video"}>Video</Radio>
              <Radio value={"quiz"}>Quiz</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Module name"
            name="modulename"
            rules={[
              { required: true, message: "Please input your module name!" },
            ]}
          >
            <span>
              <Input onChange={this.onNameChange} value={this.state.name} />
            </span>
          </Form.Item>
          {/* {!(this.state.type === "quiz") && (
            <Text
              text={this.state.text}
              onTextChange={this.onTextChange}
              type={this.state.type}
            />
          )} */}

          {this.state.type === "quiz" ? <Quiz
            questions={this.state.questions}
            addQuestion={this.addQuestion}
            removeQuestion={(i) => this.removeQuestion(i)}
            onQuestionChange={(e, i) => this.onQuestionChange(e, i)}
            onOptionChange={(e, i, option) => this.onOptionChange(e, i, option)}
            onAnsChange={(e, i) => this.onAnsChange(e, i)}
          /> :
          <Text
              text={this.state.text}
              onTextChange={this.onTextChange}
              type={this.state.type}
            />
          }

          

          {this.state.type === "video" && validator.isURL(this.state.text) && (
            <div style={{ height: 270 }}>
              <ReactPlayer
                ref={this.ref}
                className="react-player"
                width="100%"
                height="100%"
                url={text}
                pip={pip}
                playing={playing}
                controls={controls}
                light={light}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log("onReady")}
                onStart={() => console.log("onStart")}
                onPlay={this.handlePlay}
                onEnablePIP={this.handleEnablePIP}
                onDisablePIP={this.handleDisablePIP}
                onPause={this.handlePause}
                onBuffer={() => console.log("onBuffer")}
                onSeek={(e) => console.log("onSeek", e)}
                onEnded={this.handleEnded}
                onError={(e) => console.log("onError", e)}
                onProgress={this.handleProgress}
                onDuration={this.handleDuration}
              />
            </div>
          )}
        </Form>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    createModule: (id, data, success, error) =>
      dispatch(createModuleAction(id, data, success, error)),
    editModule: (id, courseId, data, success, error) =>
      dispatch(editModuleAction(id, courseId, data, success, error)),
    reset: () => dispatch({ type: "RESET" }),
  };
};

export default connect(null, mapDispatchToProps)(ModuleModal);
