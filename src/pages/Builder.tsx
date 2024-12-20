import React, { useEffect, useState } from 'react';
import { Layout, Modal, Button } from 'antd';
import ComponentList from '../components/ComponentList';
import DropZone from '../components/DropZone';
import PropsAndStyleEditor from '../components/PropsAndStyleEditor';
import CodePreview from '../components/CodePreview';
import { produce } from 'immer';
import { useNavigate } from 'react-router-dom';
const { Sider, Content, Header } = Layout;


function Builder() {
  const [components, setComponents] = useState<object[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
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

  useEffect(()=>{
    if(components.length){
    localStorage.setItem('comp',JSON.stringify(components))}
  },[components])

  useEffect(()=>{
    const comp= localStorage.getItem('comp')
    if(comp){
      setComponents(JSON.parse(comp))
    }
  },[])


  return (

    <Layout style={{height:'100vh'}}>
      <Header className="header">Drag and Drop UI builder</Header>
      <Layout>
      <Sider width={250} className="sidebar">
        <h2 className='heading'>Components List</h2>
        <hr />
        <ComponentList />
      </Sider>
      <Content className="workspace" >
        <Button onClick={() => navigate('preview')} >Preview</Button>
        <Button style={{marginLeft:'1rem'}} onClick={() =>{setSelectedIndex([]); setComponents([]);localStorage.removeItem('comp') }}danger >Reset</Button>
        <Button onClick={() => setIsModalOpen(true)} style={{float:'right'}} >Generate Code</Button>
        <DropZone
          components={components}
          onDrop={handleDrop}
          selectedIndex={selectedIndex}
          onComponentSelect={setSelectedIndex}
        />
      </Content>
      <Sider width={300} className="sidebar">
        <h2 className='heading'>Edit Styles and Props</h2>
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
      </Layout>
      <Modal open={isModalOpen}  footer={[]} onCancel={() => setIsModalOpen(false)}>
        <CodePreview components={components} />
      </Modal>
    </Layout>
  );
}

export default Builder;
