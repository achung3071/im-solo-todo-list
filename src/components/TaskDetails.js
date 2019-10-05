import React from "react";
import { Col } from "antd";
import { Input, DatePicker } from "antd";

export default function TaskDetails(props) {
  return (
    <Col
      span={12}
      style={{
        backgroundColor: "white",
        height: "100%",
        padding: "16px"
      }}
    >
      <div
        style={{
          height: "54px",
          fontSize: "25px",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textDecoration: "underline"
        }}
      >
        Task Details
      </div>
      <Input
        placeholder="Task name"
        size="large"
        style={{ marginBottom: "20px", height: "60px", fontSize: "25px" }}
        onChange={e => props.changeName(e.target.value)}
        value={props.task.name}
      />
      <DatePicker
        placeholder="Select date and time"
        showTime="true"
        size="large"
        style={{ minWidth: "100%", maxWidth: "100%" }}
      />
    </Col>
  );
}
