import React from "react";
import Folder from "./Folder";
import { Layout, Menu, Input } from "antd";
const { Sider } = Layout;
const { Search } = Input;

export default function Nav(props) {
  return (
    <Sider theme="dark" className="sider">
      <Menu theme="dark" defaultSelectedKeys={["1"]} onSelect={props.change}>
        <Menu.Item key="0">
          <Search
            placeholder="Search task"
            onSearch={value => console.log(value)}
          />
        </Menu.Item>
        {props.folders.map((name, index) => (
          <Menu.Item key={index + 1}>
            <Folder name={name} key={index} />
          </Menu.Item>
        ))}
        <Folder />
      </Menu>
    </Sider>
  );
}
