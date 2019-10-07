import React from "react";
import { Tag, Input, Icon } from "antd";

export default class EditableTagGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false,
      inputValue: ""
    };
    this.handleClose = this.handleClose.bind(this);
    this.showInput = this.showInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputConfirm = this.handleInputConfirm.bind(this);
    this.saveInputRef = this.saveInputRef.bind(this);
  }

  handleClose(removedTag) {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  }

  showInput() {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleInputConfirm() {
    if (this.state.inputValue !== "") {
      this.props.add(this.state.inputValue);
    }
    this.setState({
      inputVisible: false,
      inputValue: ""
    });
  }

  saveInputRef(input) {
    this.input = input;
  }

  render() {
    return (
      <div>
        {this.props.task.tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          return (
            <Tag key={tag} closable onClose={() => this.props.delete(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
        })}
        {this.state.inputVisible && (
          <Input
            ref={this.saveInputRef} // Creates accessible reference to input
            type="text"
            size="small"
            style={{ width: 95 }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!this.state.inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{ background: "#fff", borderStyle: "dashed" }}
          >
            <Icon type="plus" /> New Group
          </Tag>
        )}
      </div>
    );
  }
}
