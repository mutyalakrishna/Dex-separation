import React from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import n from '../navigation/Route.Names';
import SeparationScreen from './SeparationScreen/Separation';


const { Content, Footer } = Layout;


function PrivateLayout() {

    return (
        <Layout >
            <Content >
                <Routes>
                    <Route path='/' element={<SeparationScreen />} />
                    <Route path={n.SEPARATION} element={<SeparationScreen />} />
                </Routes>
            </Content>
        </Layout>
    );
}

export default PrivateLayout;