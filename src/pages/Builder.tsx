import React, { useState } from 'react';
import { Layout } from 'antd';
import ComponentList from '../components/ComponentList';
import DropZone from '../components/DropZone';
const { Sider, Content,Header } = Layout;

function Builder() {
  const [components, setComponents] = useState<object[]>([]);

  const handleDrop = (item: object) => {
    setComponents((prevComponents) => [
      ...prevComponents,
      item
    ]);
  };
  





  return (
    <Layout>
    <Sider width={250} className="sidebar">
      <ComponentList />
    </Sider>
    <Content className="workspace">
      <DropZone 
        components={components}
        onDrop={ handleDrop}
      />
    </Content>
    <Sider width={250} className="sidebar">
      Props and Style Editor
    </Sider>
    </Layout>
  );
}

export default Builder;
