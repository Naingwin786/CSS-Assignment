import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Form,
  Button,
  Select,
  message,
} from "antd";
import axios from "axios";
import { useHistory } from "react-router";
import { ROUTES } from "../../definition";
const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const CreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [allRole, setAllRole] = useState([]);
  const [selectPermission, setSelectPermission] = useState([]);
  useEffect(() => {
    axios.get(`http://union-export-import.com/api/roles`).then((res) => {
      setAllRole(res.data.data);
    });
  }, []);
  const history = useHistory();
  const handleSubmit = (values) => {
    setLoading(true);
    console.log(JSON.stringify(values));
    
    const formData = {...values, permissions: [...new Set(selectPermission)]};
    console.log(JSON.stringify(formData));
    axios
      .post(`http://union-export-import.com/api/users`, values)
      .then((res) => {
        setLoading(false);
        message.success("User Added Successfully!");
        history.push("/users");
      })
      .catch((error) => {
        setLoading(false);
        message.error(error);
      });
  };
  const selectRoleOnChange = (value, event) => {
    allRole
      .filter(function (item) {
        return item.id === value;
      })
      .map(function (role) {
        role.permissions.map(function (permission) {
          console.log(JSON.stringify(permission));
          setSelectPermission((prevArray) => [...prevArray, permission.id]);
        });
      });
  };
  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: "center" }} level={2}>
            Please Fill the User Form
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form {...layout} onFinish={handleSubmit}>
            <Form.Item
              name="name"
              label="UserName"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input placeholder="Please Enter your username" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your correct email",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Please Enter your email" />
            </Form.Item>
            <Form.Item
              name="roles"
              label="Roles"
              rules={[
                {
                  required: true,
                  message: "Please select role",
                  type: "array",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Please select you hobbies"
                onSelect={(value, event) => selectRoleOnChange(value, event)}
              >
                {allRole.map((role) => (
                  <Select.Option key={role.id} value={role.id}>
                    {role.role_name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <div style={{ textAlign: "right" }}>
              <Button type="primary" loading={loading} htmlType="submit">
                Save
              </Button>
              <Button
                type="danger"
                htmlType="button"
                onClick={() => history.push(ROUTES.UAC_LIST)}
              >
                Back
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default CreateUser;
