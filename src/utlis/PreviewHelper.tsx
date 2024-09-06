import React from 'react';

const PreviewHelper: React.FC<any> = ({ component, indexMap }) => {

  if (component.children) {
    if (Array.isArray(component.children)) {
      return (
        <component.component {...component.defaultProps} style={{ ...component.defaultStyle }}  >
          {component.children.map((subcomponet: any, subindex: any) => {
            return (
              <PreviewHelper key={subindex} component={subcomponet} indexMap={[...indexMap, subindex]} />
            )
          })}</component.component>
      )
    }
    else {
      return (
        <component.component {...component.defaultProps} style={component.defaultStyle}  >
          {component.children}
        </component.component>
      );
    }
  }
  else {
    return (
      <component.component {...component.defaultProps} style={component.defaultStyle} />)
  }
}

export default PreviewHelper;