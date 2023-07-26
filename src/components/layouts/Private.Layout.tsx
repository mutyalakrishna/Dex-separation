import React, { useState } from 'react';
import {
    TeamOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Menu, theme, Layout, Typography } from 'antd';
import { Route, Routes } from 'react-router-dom';
import styles from './Layout.Style';
import HeaderScreen from './Header'
import n from '../navigation/Route.Names';
import EmployeeProfileMainScreen from '../employee-profile/EmployeeProfile.Main'
import SepationMainScreen from '../separation/Separation.Main'
import Clearance from '../separation/clearance';


const { Header, Content, Footer } = Layout;

function PrivateLayout() {

    return (
        <Layout style={styles.layoutStyle}>
            <Header><HeaderScreen /></Header>
            <Content style={styles.contentStyle}>
                
                <Routes>
                <Route path='/' element={<SepationMainScreen />} />
                    <Route path={n.START} element={<EmployeeProfileMainScreen />} />
                    <Route path={n.SEPARATION} element={<SepationMainScreen />} />
                    <Route path={n.SEPARATION_DETAIL} element={<Clearance />} />

                </Routes>
            </Content>
            <Footer>© Altimetrik. All rights reserved 2023</Footer>
        </Layout>
    );
}

export default PrivateLayout;
