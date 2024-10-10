import React from 'react';
import { ComponentItemList } from './componentMap';
import {Typography} from 'antd';
const {Text}=Typography
const PreviewHelper: React.FC<any> = ({ component, indexMap }) => {
  const DynamicComponent = ComponentItemList[component.name];
  if (component.children) {
    if (Array.isArray(component.children)) {
      return (
        <DynamicComponent {...component.defaultProps} style={{ ...component.defaultStyle }}  >
          {component.children.map((subcomponet: any, subindex: any) => {
            return (
              <PreviewHelper key={subindex} component={subcomponet} indexMap={[...indexMap, subindex]} />
            )
          })}</DynamicComponent>
      )
    }
    else if (typeof (component.children) === 'object') {
      return (
        <DynamicComponent {...component.defaultProps}
          style={{
            ...component.defaultStyle}}
           >
          <Text style={{ ...component.defaultStyle}}>{component.children.text}</Text>
        </DynamicComponent>
      );
    }
    else {
      return (
        <DynamicComponent {...component.defaultProps} style={component.defaultStyle}  >
          {component.children}
        </DynamicComponent>
      );
    }
  }
  else {
    return (
      <DynamicComponent {...component.defaultProps} style={component.defaultStyle} />)
  }
}

export default PreviewHelper;