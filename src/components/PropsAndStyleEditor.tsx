
import React, { useEffect, useState } from 'react';
import { Form, Radio } from 'antd';
import PropsEditorHelper from '../utlis/PropsEditorHelper';
import { produce } from 'immer';

const childrenOption = {
  text: { type: 'string' },
}

const PropsAndStyleEditor: React.FC<any> = ({ components, selectedIndex, setComponents }) => {
  const [display, setDisplay] = useState('props')
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
  
  const optionList=[
    { label: 'Props', value: 'props' },
    { label: 'Styles', value: 'styles' }]

 if(typeof (selectedComponent.children) === 'string'){
  optionList.push({label:'children',value:'children'})
 }

  return (
    <div style={{ backgroundColor: '#eaeaea' }}>
      <Radio.Group
        block
        options={optionList}
        defaultValue='props'
        optionType="button"
        buttonStyle="solid"
        onChange={(e) => { setDisplay(e.target.value) }}
      />
      <Form style={{ overflow: 'auto', height: '30rem', marginTop: '2rem' }}>
        {display === "styles" && <>
          {Object.entries(selectedComponent.styleList).map(([styleParam, styleValue], index) => {
            // Use "as keyof typeof styleOptions" to assert that styleParam is a valid key of styleOptions
            const typedStyleValue = styleValue as { default: any };
            return (
              <PropsEditorHelper
                key={index}
                styleParam={styleParam}
                option={styleValue}
                styleValue={selectedComponent.defaultStyle[styleParam] === undefined ? typedStyleValue.default : selectedComponent.defaultStyle[styleParam]}
                changeStyle={(Value: any) => changeStyle("defaultStyle", styleParam, Value)}
              />
            );
          })}
        </>
        }{
          display === "props" &&
          <>
            {Object.entries(selectedComponent.propList).map(([styleParam, styleValue], index) => {
              const typedStyleValue = styleValue as { default: any }; // Casting styleValue to an object with a "default" property
              return (
                <PropsEditorHelper
                  key={index}
                  option={styleValue}
                  styleParam={styleParam}
                  styleValue={selectedComponent.defaultProps[styleParam] === undefined ? typedStyleValue.default : selectedComponent.defaultProps[styleParam]}
                  changeStyle={(Value: any) => changeStyle("defaultProps", styleParam, Value)}
                />
              );
            })}
          </>
        }
         {
            display === "children" &&
            <PropsEditorHelper
              key={80}
              styleParam={"Text"}
              option={childrenOption.text}
              styleValue={selectedComponent.children}
              changeStyle={(Value: string) => changeChild(Value)}
            />
          }
      </Form>
    </div>
  );
}

export default PropsAndStyleEditor;