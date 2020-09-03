import React from 'react';
import './styles/base.pcss';
import { Layout, Row, Col } from 'antd';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import SettingsEnter from './components/SettingsEnter';
import CategoryList from './components/CategoryList';
import ExpressionList from './components/ExpressionList';
import ExpressionCard from './components/ExpressionCard';
import AddButton from './components/AddButton';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <div className="layout__container">
        <Header className="header">
          <Row className="row">
            <Col className="col" span={8}>
              <Logo className="Logo"></Logo>
            </Col>
            <Col className="col" span={8}>
              <SearchBar className="Searchbar"></SearchBar>
            </Col>
            <Col className="col col--settings" span={8}>
              <SettingsEnter></SettingsEnter>
            </Col>
          </Row>
        </Header>
        <Layout className="layout__main">
          <Sider className="sider">
            <CategoryList className="CategoryList"></CategoryList>
            <AddButton type={'category'}></AddButton>
          </Sider>
          <Sider className="sider">
            <ExpressionList className="ExpressionList"></ExpressionList>
          </Sider>
          <Content className="content">
            <ExpressionCard></ExpressionCard>
          </Content>
        </Layout>
        <Footer className="footer">Made with love by yasevplaton</Footer>
      </div>
    </Layout>
  );
}

export default App;
