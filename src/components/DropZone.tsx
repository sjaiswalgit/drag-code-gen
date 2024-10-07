import React from 'react';
import { useDrop } from 'react-dnd';
import DroppedItems from './DroppedItems';
interface DropZoneProps {
  components: object[]; 
  onDrop:any ;
  onComponentSelect:(name:number[])=>void;
}
const DropZone: React.FC<DropZoneProps> = ({ components, onDrop,onComponentSelect }) => {
  const [{isOver}, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item,monitor) => {
      if (monitor.didDrop()) {
            return;
        }
        onDrop(item,[])
      // console.log("parent",item)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  
  return (
    <div ref={drop} className='drop-zone' onClick={()=>{onComponentSelect([])}} >
      {components.map((component, index) => (
        <DroppedItems
          key={index}
          component={component}
          onDrop={onDrop}
          indexMap={[index]}
          onComponentSelect={onComponentSelect}
        />
      ))}
    </div>
  );
}

export default DropZone;