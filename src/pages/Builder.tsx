import React, { useState } from 'react';
import { Layout, Modal, Button } from 'antd';
import ComponentList from '../components/ComponentList';
import DropZone from '../components/DropZone';
import PropsAndStyleEditor from '../components/PropsAndStyleEditor';
import CodePreview from '../components/CodePreview';
import { produce } from 'immer';
const { Sider, Content, Header } = Layout;


function Builder() {
  const [components, setComponents] = useState<object[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDrop: any = (item: any, indexMap: any) => {
    setComponents(components => {
      const newComponent = produce(components, draft => {
        let pushingIn = indexMap.reduce((acc: any, ele: any) => {
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
        <h3>Components List</h3>
        <hr />
        <ComponentList />
      </Sider>
      <Content className="workspace" >
        <Button onClick={() => setIsModalOpen(true)} >Generate Code</Button>
        <DropZone
          components={components}
          onDrop={handleDrop}
          onComponentSelect={setSelectedIndex}
        />
      </Content>
      <Sider width={300} className="sidebar">
        <h3>Edit Styles and Props</h3>
        <hr />
        {selectedIndex.length > 0 ?
          <PropsAndStyleEditor
            components={components}
            setComponents={setComponents}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          /> : "Select a dropped component to edit"
        }
      </Sider>
      <Modal open={isModalOpen} footer={[]} onCancel={() => setIsModalOpen(false)}>
        <CodePreview components={components} />
      </Modal>
    </Layout>
  );
}

export default Builder;
