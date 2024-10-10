import React from 'react';
import {Typography} from 'antd';
import { useDrag, useDrop } from 'react-dnd';
import { ComponentItemList } from '../utlis/componentMap';
const {Text}=Typography

const DroppedItems: React.FC<any> = ({ component, indexMap, onDrop, selectedIndex, onComponentSelect }) => {

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
        <DynamicComponent {...component.defaultProps}
          style={{
            ...component.defaultStyle,
            border: '1px dashed grey',
            ...(JSON.stringify(indexMap) === JSON.stringify(selectedIndex) && {
              outline: '3px solid rgba(0, 0, 255, 0.5)',
              boxShadow: '0 0 10px rgba(0, 0, 255, 0.8)',
            }),
          }}

          ref={drop}
          onClick={(e: any) => { e.stopPropagation(); onComponentSelect(indexMap) }} >
          {
            component.children.map((subcomponet: any, subindex: any) => {
              return (
                <DroppedItems
                  key={subindex}
                  component={subcomponet}
                  indexMap={[...indexMap, subindex]}
                  onDrop={onDrop}
                  selectedIndex={selectedIndex}
                  onComponentSelect={onComponentSelect} />
              )
            })
          }
        </DynamicComponent >
      )
    }
    else if (typeof (component.children) === 'object') {
      return (
        <DynamicComponent {...component.defaultProps}
          style={{
            ...component.defaultStyle,
            ...(JSON.stringify(indexMap) === JSON.stringify(selectedIndex) && {
              outline: '3px solid rgba(0, 0, 255, 0.5)',
              boxShadow: '0 0 10px rgba(0, 0, 255, 0.8)',
            }),
          }}
          onClick={(e: any) => { e.stopPropagation(); onComponentSelect(indexMap) }}  >
          <Text style={{ ...component.defaultStyle,
            ...(JSON.stringify(indexMap) === JSON.stringify(selectedIndex) && {
              outline: '3px solid rgba(0, 0, 255, 0.5)',
              boxShadow: '0 0 10px rgba(0, 0, 255, 0.8)',
            })}}>{component.children.text}</Text>
        </DynamicComponent>
      );
    }
    else {
      return (
        <DynamicComponent {...component.defaultProps}
          style={{
            ...component.defaultStyle,
            ...(JSON.stringify(indexMap) === JSON.stringify(selectedIndex) && {
              outline: '3px solid rgba(0, 0, 255, 0.5)',
              boxShadow: '0 0 10px rgba(0, 0, 255, 0.8)',
            }),
          }}
          onClick={(e: any) => { e.stopPropagation(); onComponentSelect(indexMap) }}  >
          {component.children}
        </DynamicComponent>
      );
    }
  }
  else {
    return (
      <DynamicComponent {...component.defaultProps}
        style={{
          ...component.defaultStyle,
          ...(JSON.stringify(indexMap) === JSON.stringify(selectedIndex) && {
            outline: '3px solid rgba(0, 0, 255, 0.5)',
            boxShadow: '0 0 10px rgba(0, 0, 255, 0.8)'
          }),
        }}
        onClick={(e: any) => { e.stopPropagation(); onComponentSelect(indexMap) }} />)
  }
}

export default DroppedItems;