import React from "react";
import { Icon } from "antd";

export default function Folder(props) {
  let icons = {};
  icons["All Tasks"] = "clock-circle";
  icons["Completed"] = "check-circle";
  icons["Groups"] = "appstore";
  return (
    <div>
      <Icon type={icons[props.name]} />
      <span>{props.name}</span>
    </div>
  );
}
