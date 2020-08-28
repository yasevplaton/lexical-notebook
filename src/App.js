import React from 'react';
import './App.pcss';
import { Layout} from 'antd';
import './styles/base.pcss';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <div className="layout__container">
        <Header className="header">Header</Header>
        <Layout className="layout__main">
          <Sider className="sider">Sider</Sider>
          <Content className="content">Content</Content>
        </Layout>
        <Footer className="footer">Footer</Footer>
      </div>
    </Layout>
  );
}

export default App;
