import React, { useState } from 'react';
import { Form, Input, InputNumber, Select, Slider, Switch, ColorPicker, Radio } from 'antd';
const { Option } = Select;
interface PropsEditorHelperProps {
  option: any;
  styleValue: any;
  changeStyle: any
}


const PropsEditorHelper: React.FC<PropsEditorHelperProps> = ({ option, styleValue, changeStyle }) => {


  switch (option.type) {
    case 'string':
      return (
        <Form.Item label={option.label}>
          <Input.TextArea
            rows={4}
            style={{ display: 'block', width: '90%' }}
            value={styleValue}
            onChange={(e) => changeStyle(e.currentTarget.value)}
          />
        </Form.Item>
      );
    case 'number':
      if (typeof styleValue === 'string') {
        const numericMatch = styleValue.match(/^\d+/); 
        const unitMatch = styleValue.match(/\D.*/);    
      
        return (
          <Form.Item label={option.label}>
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
      }
      else {
        return (
          <Form.Item label={option.label} >
            <InputNumber
              min={0}
              value={styleValue}
              onChange={(value) => changeStyle(value ? value : 0)}
            />
          </Form.Item>
        )
      }
    case 'select':
      return (
        <Form.Item label={option.label}>
          <Select
            value={styleValue}
            onChange={(value) => changeStyle(value)}
          >
            {option.options.map((opt:any) => (
              <Option key={opt.value} value={opt.value}>
                {opt.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      );
    case 'color':
      return (
        <Form.Item label={option.label}>
          <ColorPicker
            value={styleValue}
            onChange={(color) => changeStyle(color.toHexString())}
          />
        </Form.Item>
      );
    case 'boolean':
      return (
        <Form.Item label={option.label} valuePropName="checked">
          <Switch
            checked={styleValue}
            onChange={(checked) => changeStyle(checked)}
          />
        </Form.Item>
      );
    case 'range':
      return (
        <Form.Item label={option.label}>
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

export default PropsEditorHelper;