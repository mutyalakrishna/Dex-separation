import React, { Fragment } from "react";
import { Table, Avatar, Button, Row, Col, Select } from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface DataType {
  key: string;
  name: string;
  id: string;
  location: string;
  lwd: string;
  status: string;
  action: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Employee Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a,b)=>a.name-b.name,
    render: (text) => {
      return (
        <Fragment>
          <Avatar>MB</Avatar> {text}
        </Fragment>
      )
    },
    filters: [
      {
        text: 'Mahesh Balakrishna',
        value: 'Mahesh Balakrishna',
      },
    ],
    filterSearch: true,
  },
  {
    title: 'Employee ID',
    dataIndex: 'id',
    key: 'id',
    sorter: true,
    filters: [
      {
        text: 'APL - 987654',
        value: 'APL - 987654',
      },
    ],
    filterSearch: true,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    sorter: true,
    filters: [
      {
        text: 'Bengaluru',
        value: 'Bengaluru',
      },
    ],
    filterSearch: true,
  },
  {
    title: 'LWD',
    dataIndex: 'lwd',
    key: 'lwd',
    sorter: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: true,
    filters: [
      {
        text: 'No Action',
        value: 'No Action',
      },
    ],
    filterSearch: true,
    render: (text) => <Button style={{ background: "#D1E4F6" }}>{text}</Button>
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    sorter: true,
    render: (text) =>
      <Button type="primary">{text}</Button>
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'M Rajesh',
    id: 'APL - 887654',
    location: 'Bengaluru',
    lwd: "23-May-23",
    status: 'No Action',
    action: 'Clearance',
  },
  {
    key: '1',
    name: 'Mahesh Balakrishna',
    id: 'APL - 987654',
    location: 'Bengaluru',
    lwd: "23-May-23",
    status: 'No Action',
    action: 'Clearance',
  },
];

const ContentTable: React.FC = () => <Fragment>
  <Table columns={columns} dataSource={data} pagination={false} style={{backgroundColor: '#ffffff', padding: '5px'}}/>
  <Row>
    <Col span={8}>
      Items per page:
      &nbsp;
      <Select
        defaultValue="1"
        options={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
        ]}
      />
      &nbsp;
      1 - 10 of 103 items
    </Col>
    <Col span={4} offset={12}>
      <Select
        defaultValue="1"
        options={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
        ]}
      />
      &nbsp;
      of 11 pages
    </Col>
  </Row>
</Fragment>;

export default ContentTable;