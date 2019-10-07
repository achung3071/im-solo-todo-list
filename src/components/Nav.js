import React from "react";
import Folder from "./Folder";
import { Layout, Menu, Input } from "antd";
const { Sider } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;

export default function Nav(props) {
  return (
    <Sider theme="dark" className="sider">
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        onSelect={props.change}
        mode="inline"
      >
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
        <SubMenu title={<Folder name="Groups" key="sub1" />}>
          {props.groups.map((name, index) => (
            <Menu.Item key={index + 3}>{name}</Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
}
