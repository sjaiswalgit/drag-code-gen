import React from 'react';
import { useDrag } from 'react-dnd';
import { ComponentMap} from '../utlis/componentMap';


const DraggableMenuItem:React.FC<any>=({ component })=>{
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: component,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1,backgroundColor:'#75e5ef',border:'1px dashed white', padding:'2px',width:'5rem',height:'2rem',textAlign:'center',color:'white' }}>
      {component.name}
    </div>
  );
}

function ComponentList() {
  return (
    <div style={{width:'100%',display:'flex',flexDirection:'row', flexWrap:'wrap',justifyItems:'center',gap:4}}>
      {ComponentMap.map((component,index) => (
        <DraggableMenuItem key={index} component={component} />
      ))}
    </div>
  );
}

export default ComponentList;