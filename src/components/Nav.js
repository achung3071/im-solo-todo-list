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
            onChange={e => props.search(e.target.value)}
          />
        </Menu.Item>
        {props.folders.map(
          (name, index) =>
            index !== 0 && (
              <Menu.Item key={index}>
                <Folder name={name} key={index} />
              </Menu.Item>
            )
        )}
      </Menu>
    </Sider>
  );
}
