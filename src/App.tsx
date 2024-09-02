import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Builder from './pages/Builder';
const { Sider, Content,Header } = Layout;

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <Layout style={{ height: '100vh' }}>
      <Header className="header">Drag-Code-Gen</Header>
      <Builder />
    </Layout>
    </DndProvider>
  );
}

export default App;
