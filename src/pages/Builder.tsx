import React, { useState } from 'react';
import { Layout } from 'antd';
import ComponentList from '../components/ComponentList';
import DropZone from '../components/DropZone';
import { produce } from 'immer';
const { Sider, Content,Header } = Layout;


function Builder() {
  const [components, setComponents] = useState<object[]>([]);

  const handleDrop:any = (item:any, indexMap:any) => {
    setComponents(components=>{
    const newComponent = produce(components, draft => {
      let pushingIn = indexMap.reduce((acc:any, ele:any) => {
        return acc[ele].children
      }, draft)
      pushingIn.push(item)
    })
    return newComponent
  }
  )
  };

  





  return (
    <Layout>
    <Sider width={250} className="sidebar">
      <ComponentList />
    </Sider>
    <Content className="workspace">
      <DropZone 
        components={components}
        onDrop={handleDrop}
      />
    </Content>
    <Sider width={250} className="sidebar">
      Props and Style Editor
    </Sider>
    </Layout>
  );
}

export default Builder;
