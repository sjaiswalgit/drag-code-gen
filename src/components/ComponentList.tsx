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
    <div ref={drag} className='componentItem' style={{ opacity: isDragging ? 0.5 : 1}}>
      {component.name}
    </div>
  );
}

function ComponentList() {
  return (
    <div className='componentList' >
      {ComponentMap.map((component,index) => (
        <DraggableMenuItem key={index} component={component} />
      ))}
    </div>
  );
}

export default ComponentList;