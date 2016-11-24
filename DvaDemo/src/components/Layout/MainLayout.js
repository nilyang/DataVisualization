import React, {Component} from 'react'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const MainLayout = React.createClass({
  getInitialState() {
    return {
      current: 'mail',
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render() {
    return (
    <div className="mainlayout">
        <Menu onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            theme="dark">
    
            <Menu.Item key="transrate">
                <Icon type="area-chart"/>转化率
            </Menu.Item>
            <Menu.Item key="app" disabled>
                <Icon type="dot-chart" />其他
            </Menu.Item>
        </Menu>

        <div className="ant-layout-main">
            <div className="ant-layout-header"></div>
            <div className="ant-layout-container">
            <div className="ant-layout-content">
                <div style={{ height: 420 }}>
                {this.props.children}
                </div>
            </div>
            </div>
            <div className="ant-layout-footer">
            版权所有 © 2016 由线上数据部支持
            </div>
        </div>
    </div>
    );
  },
});

export default MainLayout;