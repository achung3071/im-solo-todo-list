import React from "react";
import { Icon } from "antd";

export default function Task(props) {
  return (
    <div className="task" style={{ backgroundColor: props.color }}>
      <div
        className="task-info"
        onClick={() => props.click(props.task)}
        style={{ cursor: "pointer" }}
      >
        <h2>{props.task.name}</h2>
        {props.task.time}
      </div>
      <div className="task-icons">
        <Icon
          type={props.name === "Completed" ? "undo" : "check"}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)"
          }}
          onClick={() => props.modify(props.task)}
        />
        <Icon
          type="delete"
          style={{
            right: "0px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)"
          }}
          onClick={() => props.delete(props.task)}
        />
      </div>
    </div>
  );
}
