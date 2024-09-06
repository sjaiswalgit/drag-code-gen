import React, { useState } from 'react';
import { Form, Input, InputNumber, Select, Slider, Switch, ColorPicker, Radio } from 'antd';
const { Option } = Select;
interface PropsEditorHelperProps {
  option: any;
  styleParam:any;
  styleValue: any;
  changeStyle: any
}


const PropsEditorHelper: React.FC<PropsEditorHelperProps> = ({styleParam, option, styleValue, changeStyle }) => {


  if(typeof(option.type)==='string'){
  switch (option.type) {
    case 'string':
      return (
        <Form.Item label={styleParam}>
          <Input.TextArea
            rows={4}
            style={{ display: 'block', width: '90%' }}
            value={styleValue}
            onChange={(e) => changeStyle(e.currentTarget.value)}
          />
        </Form.Item>
      );
    case 'numberp':
        const numericMatch = styleValue.match(/^\d+/); 
        const unitMatch = styleValue.match(/\D.*/);    
      
        return (
          <Form.Item label={styleParam}>
            <InputNumber
              min={0}
              value={Number(numericMatch ? numericMatch[0] : 0)}
              onChange={(value: number | null) =>
                changeStyle(
                  styleValue.replace(numericMatch ? numericMatch[0] : '0', value ? value.toString() : '0')
                )
              }
            />
            {unitMatch && (
              <Radio.Group
                block={true}
                style={{ display: 'block' }}
                onChange={(e) => {
                  changeStyle(
                    styleValue.replace(unitMatch[0], e.target.value)
                  );
                }}
                value={unitMatch[0]}
              >
                <Radio value="px">px</Radio>
                <Radio value="rem">rem</Radio>
                <Radio value="%">%</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        );
    case 'number':
        return (
          <Form.Item label={styleParam} >
            <InputNumber
              min={0}
              value={styleValue}
              onChange={(value) => changeStyle(value ? value : 0)}
            />
          </Form.Item>
        )
    
    case 'color':
      return (
        <Form.Item label={styleParam}>
          <ColorPicker
            value={styleValue}
            onChange={(color) => changeStyle(color.toHexString())}
          />
        </Form.Item>
      );
    case 'boolean':
      return (
        <Form.Item label={styleParam} valuePropName="checked">
          <Switch
            checked={styleValue}
            onChange={(checked) => changeStyle(checked)}
          />
        </Form.Item>
      );
    case 'range':
      return (
        <Form.Item label={styleParam}>
          <Slider
            min={option.min}
            max={option.max}
            value={styleValue}
            onChange={(value) => changeStyle(value)}
          />
        </Form.Item>
      );
    default:
      return null;
  }
}
else{

    return (
      <Form.Item label={styleParam}>
        <Select
          value={styleValue}
          onChange={(value) => changeStyle(value)}
        >
          {option.type.map((opt:any,index:any) => (
            <Option key={index} value={opt}>
              {opt}
            </Option>
          ))}
        </Select>
      </Form.Item>
    );
}
}

export default PropsEditorHelper;