import React from "react";
import { Icon } from "antd";

export default function Folder(props) {
  let icons = {};
  icons["All Tasks"] = "clock-circle";
  icons["Day-by-Day"] = "calendar";
  icons["Completed"] = "check-circle";
  return (
    <div>
      <Icon type={icons[props.name]} />
      <span>{props.name}</span>
    </div>
  );
}
