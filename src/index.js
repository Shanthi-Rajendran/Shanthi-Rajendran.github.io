import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'
import { Layout, Menu } from 'antd'
import { Avatar, Badge , Space } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FormOutlined,
  CommentOutlined,
  CalendarOutlined,
  CheckSquareOutlined,
  BellOutlined
} from '@ant-design/icons';
import {ChatLayout as Chat} from './Screens/Chat/index';
const { Header, Sider, Content } = Layout;

class ApplicationLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{height:"100vh"}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<CheckSquareOutlined />}>
              Todos
            </Menu.Item>
            <Menu.Item key="2" icon={<FormOutlined />}>
              Notes
            </Menu.Item>
            <Menu.Item key="4" icon={<CalendarOutlined />}>
              Calender
            </Menu.Item>
            <Menu.Item key="5" icon={<CommentOutlined />}>
              Chat 
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}<span className="header-profile-icon">
              <Space>
              Hi , Shanthi Rajendran
               <span className="avatar-item">
      <Badge count={1}>
        <Avatar shape="square" icon={<BellOutlined />} />
      </Badge>
    </span>
              </Space>
             
            </span>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Chat></Chat>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<ApplicationLayout />, document.getElementById('container'));