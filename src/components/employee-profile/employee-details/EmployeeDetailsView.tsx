import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Typography, Space } from 'antd';
import Styles from './EmployeeDetails.Style';

const { Title } = Typography;


function EmployeeDetailsScreen() {
  return (
    <div>

      <p style={Styles.welcomeText}>Welcome <span style={Styles.employeeName}>Jack Caleb-1234!</span></p>
      <p style={Styles.employeeDesignation}>Senior Engineer - Product & Platform Engineering | Chennai | 7Years</p>

    </div>
  );
}

export default EmployeeDetailsScreen;
