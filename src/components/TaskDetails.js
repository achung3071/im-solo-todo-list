import React from "react";
import { Col, Input, DatePicker } from "antd";
import EditableTagGroup from "./EditableTagGroup";
import moment from "moment";

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
        onChange={e => props.changeInfo("name", e.target.value)}
        value={props.task.name}
      />
      <DatePicker
        showTime
        placeholder="Select date and time"
        format="YYYY-MM-DD HH:mm"
        size="large"
        style={{ marginBottom: "20px", minWidth: "100%", maxWidth: "100%" }}
        onChange={(moment, time) => props.changeInfo("time", time)}
        value={
          props.task.time === "Undated"
            ? null
            : moment(props.task.time, "YYYY-MM-DD HH:mm")
        }
      />
      <EditableTagGroup
        task={props.task}
        add={props.add}
        delete={props.delete}
      />
    </Col>
  );
}
