import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const  DroppedItems:React.FC<any>=({ component,indexMap,onDrop,onComponentSelect })=> {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'COMPONENT',
        drop: (item, monitor) => {
          if (monitor.didDrop()) {
            return;
          }
          onDrop(item, indexMap)
          // console.log("child",item)
        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));

    if (component.children) {
        if (Array.isArray(component.children)) {
          return (
            <component.component {...component.defaultProps}   style={{ ...component.defaultStyle,border:'1px dashed grey'}} ref={drop}  onClick={(e:any) =>{ e.stopPropagation(); onComponentSelect(indexMap)}} >
              {component.children.map((subcomponet:any, subindex:any) => {
                return (
                  <DroppedItems key={subindex} component={subcomponet} indexMap={[...indexMap, subindex]} onDrop={onDrop} onComponentSelect={onComponentSelect} />
                )
              })}</component.component>
          )
        }
        else {
          return (
            <component.component {...component.defaultProps} style={component.defaultStyle} onClick={(e:any) =>{ e.stopPropagation(); onComponentSelect(indexMap)}}  >
              {component.children}
            </component.component>
          );
        }
      }
      else {
        return (
          <component.component {...component.defaultProps} style={component.defaultStyle} onClick={(e:any) =>{ e.stopPropagation(); onComponentSelect(indexMap)}} />)
      }
}

export default DroppedItems;