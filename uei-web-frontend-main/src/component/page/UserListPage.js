import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button, Typography } from "antd";
import { useHistory } from "react-router";
import { ROUTES } from '../../definition';
import axios from "axios";
const { Title } = Typography;
const UserList = () => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    axios.get(`http://union-export-import.com/api/users`).then((res) => {
      setAllData(res.data.data);
    });
  }, []);
  const columns = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Create At",
      dataIndex: "createdAt",
    },
  ];
  const data = [{}];
  allData.map((user) => {
    data.push({
      key: user.id,
      username: user.name,
      email: user.email,
      createdAt: user.created_at,
    });
    return data;
  });
  const handleClick = () => {
    console.log("fioejiofe");
    history.push(ROUTES.UAC_CREATE);
  };
  return (
    <React.Fragment>
      <div>
        <Row gutter={[40, 0]}>
          <Col span={18}>
            <Title level={2}>User List</Title>
          </Col>
          <Col span={6}>
            <Button onClick={handleClick} block>
              Add User
            </Button>
          </Col>
        </Row>
        <Row gutter={[40, 0]}>
          <Col span={24}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default UserList;
