import React from "react";
import { Icon } from "antd";

export default function Task(props) {
  return (
    <div className="task">
      <div className="task-info">
        <h2>{props.name}</h2>
        Undated
      </div>
      <div className="task-icons">
        <Icon
          type="check"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        />
        <Icon
          type="delete"
          style={{
            right: "0px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        />
      </div>
    </div>
  );
}
