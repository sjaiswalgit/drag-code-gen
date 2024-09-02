import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

const { Sider, Content,Header } = Layout;

function App() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header">Drag-Code-Gen</Header>
      <Layout>
      <Sider width={250} className="sidebar">
        Component List
      </Sider>
      <Content className="workspace">
        Dropping Pannel
      </Content>
      <Sider width={250} className="sidebar">
        Props and Style Editor
      </Sider>
      </Layout>
    </Layout>
  );
}

export default App;
