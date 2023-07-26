import React, { useEffect, useState } from 'react';
import {
    TeamOutlined,
    SearchOutlined
} from '@ant-design/icons';
import { MenuProps, Space, Image, Avatar, Dropdown } from 'antd';
import { Menu, theme, Layout, Typography } from 'antd';
import { Route, Routes } from 'react-router-dom';
import styles from './Layout.Style';
import { useNavigate, useParams } from "react-router-dom";
import n from '../navigation/Route.Names'
import { UserOutlined, DownOutlined } from '@ant-design/icons';

const { Title } = Typography;

function HeaderScreen(props: any) {

    return (
        <div style={styles.headerDiv}>
            <Space size="large">
                <p style={styles.titleStyle}>DEX</p>
            </Space>
            <Space style={styles.titleLogo}>
                <Image
                    preview={false}
                    src={require('../../themes/assets/images/title-logo.png')}
                />
            </Space>
            <Space direction="horizontal">
                    <Avatar size={40} icon={<UserOutlined />} style={{marginTop: '8px'}}/>
                    </Space>
        </div>
    );
}

export default HeaderScreen;
