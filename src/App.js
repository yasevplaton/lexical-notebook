import React from 'react';
import './styles/blocks/App.pcss';
import './styles/base.pcss';
import { Layout, Row, Col } from 'antd';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import SettingsEnter from './components/SettingsEnter';
import CategoryList from './components/CategoryList';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <div className="layout__container">
        <Header className="header">
          <Row className="row">
            <Col className="col" span={8}>
              <Logo></Logo>
            </Col>
            <Col className="col" span={8}>
              <SearchBar></SearchBar>
            </Col>
            <Col className="col col--settings" span={8}>
              <SettingsEnter></SettingsEnter>
            </Col>
          </Row>
        </Header>
        <Layout className="layout__main">
          <Sider className="sider">
            <CategoryList></CategoryList>
          </Sider>
          <Content className="content">Content</Content>
        </Layout>
        <Footer className="footer">Made with love by yasevplaton</Footer>
      </div>
    </Layout>
  );
}

export default App;
