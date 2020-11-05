import React from "react";
import { Menu } from "antd";
import { ROUTES } from "../../definition";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";
const SideNav = () => {
  const history = useHistory();
  const handleUserClick = () => {
    history.push(ROUTES.UAC_LIST);
  };
  const handleStockClick = () => {
    history.push(ROUTES.EMPTY);
  };
  return (
    <div>
      <div
        style={{
          height: "32px",
          background: "rgba(255, 255, 255, 0.2)",
          margin: "16px",
        }}
      ></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" onClick={handleUserClick}>
          <UserOutlined />
          <span> Users</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={handleStockClick}>
          <UploadOutlined />
          <span> Stock</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default SideNav;