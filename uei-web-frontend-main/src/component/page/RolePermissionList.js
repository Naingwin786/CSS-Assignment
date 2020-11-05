import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button, Typography, Divider, Select } from "antd";
import { useHistory } from "react-router";
import { ROUTES } from '../../definition';
import axios from "axios";
import '../page/RolePermission.css';
import { Switch } from 'antd';
const { Title } = Typography;
const style = { background: '#0092ff', padding: '8px 0' };
// const Rectangle_1478 = {
//     width: '1008px',
//     height: '120px',
//     border-radius: '4px',
//     border: solid 1px #eeeeee;
//     background-color: #fafafa;
//   }
  

const RolePermissionList = () => {
    const { Option } = Select;

    function onChange(checked) {
        console.log(`switch to ${checked}`);
      }

    function onChange(value) {
      console.log(`selected ${value}`);
    }
    
    function onBlur() {
      console.log('blur');
    }
    
    function onFocus() {
      console.log('focus');
    }
    
    function onSearch(val) {
      console.log('search:', val);
    }
  return (
    <React.Fragment>
      <div>
      
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
       <div><h3>Role & Permission list</h3></div> 
      </Col>
      <Col className="gutter-row" span={6}>
      </Col>
      <Col className="gutter-row" span={6}>
      </Col>
      <Col className="gutter-row" span={6}>
      <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="admin">admin</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
      </Col>
    </Row>

      </div>

      <div class = "TopSpace">
      <Row gutter={32}>
      <Col className="gutter-row" span={6}>
        <div><h4>Manager</h4></div>
      </Col>
      
      <Col className="gutter-row" span={16}>
        <div class = "Rectangle-1478">
        <Row justify="start">
            <Col span={4}><div  class = "Sale-Role">Sale Role</div></Col>
            <Col span={4}><div  class = "Sale-Role">View</div></Col>
            <Col span={4}><div  class = "Sale-Role">Edit</div></Col>
            <Col span={4}><div  class = "Sale-Role">Delete</div></Col>
            <Col span={4}><div  class = "Sale-Role">Setting1</div></Col>

        </Row>
        <Row justify="start">
            <Col span={4}></Col>
            <Col span={4}><div  class = "Switch"><Switch defaultChecked onChange={onChange} /></div></Col>
            <Col span={4}><div  class = "Switch"><Switch defaultChecked onChange={onChange} /></div></Col>
            <Col span={4}><div  class = "Switch"><Switch defaultChecked onChange={onChange} /></div></Col>
            <Col span={4}><div  class = "Switch"><Switch defaultChecked onChange={onChange} /></div></Col>

        </Row>


        </div>
        <Row justify="start" style = {{paddingTop:'24px'}}>
            
            <Col span={24}><hr color="#eeeeee"></hr></Col>
           

        </Row>
        
      </Col>
    </Row>
    

    </div>
    <div style = {{paddingLeft : '48px',paddingTop : '24px'}}>
    <Row gutter={32}>
      <Col className="gutter-row" span={6}>
        
      </Col>
      
      <Col className="gutter-row" span={16}>
        <div class = "Rectangle-1478">
        <Row justify="start">
            <Col span={4}><div  class = "Sale-Role">UAC Role</div></Col>
            <Col span={4}><div  class = "Sale-Role">View</div></Col>
            <Col span={4}><div  class = "Sale-Role">Edit</div></Col>
            <Col span={4}><div  class = "Sale-Role">Delete</div></Col>
            <Col span={4}><div  class = "Sale-Role">Setting1</div></Col>

        </Row>
        <Row justify="start">
            <Col span={4}></Col>
            <Col span={4}><div  class = "Switch"><Switch defaultChecked onChange={onChange} /></div></Col>
            <Col span={4}><div  class = "Switch"><Switch defaultChecked onChange={onChange} /></div></Col>
            <Col span={4}><div  class = "Switch"><Switch defaultChecked onChange={onChange} /></div></Col>
            <Col span={4}><div  class = "Switch"><Switch defaultChecked onChange={onChange} /></div></Col>

        </Row>

        </div>
        
      </Col>
    </Row>

    </div>
    </React.Fragment>
  );
};
export default RolePermissionList;
