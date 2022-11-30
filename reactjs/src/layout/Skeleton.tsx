import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppRouter from "../components/AppRouter";
import {RouteNames, RouteNamesTitle} from "../router";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Catalog', 'sub1', <UserOutlined />, [
        getItem(<NavLink to={RouteNames.COUNTERPARTIES}>{RouteNamesTitle.COUNTERPARTIES}</NavLink>,RouteNames.COUNTERPARTIES),
        getItem(<NavLink to={RouteNames.COMPANIES}>{RouteNamesTitle.COMPANIES}</NavLink>,RouteNames.COMPANIES),
        getItem('User', '5'),
        getItem(<NavLink to={RouteNames.CONTRACTS}>{RouteNamesTitle.CONTRACTS}</NavLink>,RouteNames.CONTRACTS),
    ]),
    getItem('Document', 'sub2', <TeamOutlined />, [
        getItem('Sales invoice', '7'),
        getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Skeleton: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <AppRouter/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Skeleton;