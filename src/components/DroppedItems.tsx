import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ComponentItemList } from '../utlis/componentMap';
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
    const DynamicComponent = ComponentItemList[component.name];
    if (component.children) {
        if (Array.isArray(component.children)) {
          return (
            <DynamicComponent {...component.defaultProps}   style={{ ...component.defaultStyle,border:'1px dashed grey'}} ref={drop}  onClick={(e:any) =>{ e.stopPropagation(); onComponentSelect(indexMap)}} >
              {component.children.map((subcomponet:any, subindex:any) => {
                return (
                  <DroppedItems key={subindex} component={subcomponet} indexMap={[...indexMap, subindex]} onDrop={onDrop} onComponentSelect={onComponentSelect} />
                )
              })}</DynamicComponent>
          )
        }
        else {
          return (
            <DynamicComponent {...component.defaultProps} style={component.defaultStyle} onClick={(e:any) =>{ e.stopPropagation(); onComponentSelect(indexMap)}}  >
              {component.children}
            </DynamicComponent>
          );
        }
      }
      else {
        return (
          <DynamicComponent {...component.defaultProps} style={component.defaultStyle} onClick={(e:any) =>{ e.stopPropagation(); onComponentSelect(indexMap)}} />)
      }
}

export default DroppedItems;