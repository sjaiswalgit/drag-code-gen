import { Input, Button, Select, Row, Col, Image, Typography, Flex, Dropdown, Anchor } from 'antd';

const { Title, Text } = Typography;

export interface ComponentItemProps{
  name: string; 
  component: React.ComponentType<any>; 
  defaultProps?: object; 
  defaultStyle?: React.CSSProperties;
  children?:any
}

export const ComponentMap:ComponentItemProps[] = [
  {
    name: 'Input',
    component: Input,
    defaultProps: { placeholder: 'Enter text' },
    defaultStyle: {
    }
  }, {
    name: 'Button',
    component: Button,
    defaultProps: {type:"primary"},
    children: 'Click me',
    defaultStyle:{
       backgroundColor:''
    }

  },
  {
    name: 'Select',
    component: Select,
    defaultProps: { 
      defaultValue:"option1",
      options: [
        { value: 'option1', label:  <span>sample1</span>  },
        { value: 'option2', label: <span>sample2</span> },
      ]
    },
  },
  {
    name: 'Row',
    component: Row,
    defaultProps: {},
    children:[],
    defaultStyle:{
      minHeight:'20rem',
      backgroundColor:''
    }
    },
  {
    name: 'Col',
    component: Col,
    defaultProps: { span: 12 },
    children:[],
    defaultStyle:{
      minHeight:'20rem',
      backgroundColor:''
    }
  }
]