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
      <Builder />
    </DndProvider>
  );
}

export default App;
