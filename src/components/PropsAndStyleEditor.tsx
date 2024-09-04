
import React, { useEffect, useState } from 'react';
import { Form, } from 'antd';
import PropsEditorHelper from '../utlis/PropsEditorHelper';
import { produce } from 'immer';
const styleOptions = {
  width: { type: 'number', label: 'Width' },
  height: { type: 'number', label: 'Height' },
  minHeight: { type: 'number', label: 'minHeight' },
  minWidth: { type: 'number', label: 'minWidth' },
  fontSize: { type: 'number', label: 'Font Size' },
  color: { type: 'color', label: 'Text Color' },
  backgroundColor: { type: 'color', label: 'Background Color' },
  text: { type: 'string', label: 'Edit Text' },
  src: { type: 'string', label: 'Edit Text' },
  preview: { type: 'boolean', label: 'Preview' }
}

const PropsAndStyleEditor: React.FC<any> = ({ components, selectedIndex, setComponents }) => {
  const changeStyle = (style: any, styleParam: any, styleValue: any) => {
    setComponents((comp: any) => {
      const newComponent = produce(comp, (draft: any) => {
        let component = selectedIndex.reduce((acc: any, ele: any, index: any) => {
          if (selectedIndex.length - 1 === index) {
            return acc[ele]
          }
          else {
            return acc[ele].children
          }
        }, draft)
        component[style][styleParam] = styleValue
      })

      return newComponent
    })
  }
  const changeChild = (text: string) => {
    setComponents((comp: any) => {
      const newComponent = produce(comp, (draft: any) => {
        let component = selectedIndex.reduce((acc: any, ele: any, index: any) => {
          if (selectedIndex.length - 1 === index) {
            return acc[ele]
          }
          else {
            return acc[ele].children
          }
        }, draft)
        component.children = text
      })

      return newComponent
    })
  }


  const selectedComponent = selectedIndex.reduce((acc: any, ele: number, index: number) => {
    if (selectedIndex.length - 1 === index) {
      return acc[ele]
    }
    else {
      return acc[ele].children
    }
  }, components)


  return (
    <div style={{ backgroundColor: '#eaeaea', height: '100%' }}>
      <h2 style={{ margin: 0, textAlign: 'center' }}>Style Editor</h2>
      <hr />
      <div style={{ marginLeft: "2rem", }}>
        <Form >
          {Object.entries(selectedComponent.defaultStyle).map(([styleParam, styleValue], index) => {
            // Use "as keyof typeof styleOptions" to assert that styleParam is a valid key of styleOptions
            const option = styleOptions[styleParam as keyof typeof styleOptions];

            return (
              <PropsEditorHelper
                key={index}
                option={option}
                styleValue={styleValue}
                changeStyle={(Value: any) => changeStyle("defaultStyle", styleParam, Value)}
              />
            );
          })}
          {
            typeof (selectedComponent.children) === 'string' &&
            <PropsEditorHelper
              option={styleOptions.text}
              styleValue={selectedComponent.children}
              changeStyle={(Value: string) => changeChild(Value)}
            />
          }
          {/* {Object.entries(selectedComponent.defaultProps).map(([styleParam,styleValue],index)=>{
        return(
        <RenderStyleFields
            key={index}
            option={styleOptions[styleParam]}
            styleValue={styleValue}
            changeStyle={(Value)=>changeStyle("defaultProps",styleParam,Value)}
        />)
      })
      } */}
        </Form>
      </div>
    </div>
  );
}

export default PropsAndStyleEditor;