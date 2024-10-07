import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Builder from './pages/Builder';
import Preview from './pages/Preview';
import NotFoundPage from './pages/Notfound';
const { Sider, Content, Header } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="drag-code-gen" index element={<DndProvider backend={HTML5Backend}><Builder /></DndProvider>} />
        <Route path="drag-code-gen/preview" element={<Preview />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
