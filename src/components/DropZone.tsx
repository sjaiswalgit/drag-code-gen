import React from 'react';
import { useDrop } from 'react-dnd';
import DroppedItems from './DroppedItems';
interface DropZoneProps {
  components: object[]; 
  onDrop: (item: object) => void; 
}
const DropZone: React.FC<DropZoneProps> = ({ components, onDrop }) => {
  const [{isOver}, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item:object,monitor) => {
      if (monitor.didDrop()) {
            return;
        }
        onDrop(item)
      // console.log("parent",item)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  
  return (
    <div ref={drop} style={{width:'100%', minHeight: '300px', height:'90%', border: '1px solid gray',overflow:'auto',margin:'2px' }}>

      {components.map((component, index) => (
        <DroppedItems
          key={index}
          component={component}
        />
      ))}
    </div>
  );
}

export default DropZone;