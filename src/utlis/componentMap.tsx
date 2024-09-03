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
  }, {
    name:'Image',
    component: Image,
    defaultProps: { width:200,src:'/logo192.png',preview:false },
    defaultStyle:{
      objectFit:'contain',
      
    }
  },
  {
    name: 'Text',
    component:Text,
    defaultProps: {},
    children: 'Write Something',
    defaultStyle:{}
  },
  {
    name: 'Flex',
    component:Flex,
    defaultProps: {gap:"middle",align:"start", vertical:false},
    children: [{
      name: 'Text',
      component:Text,
      defaultProps: {},
      children: '',
      defaultStyle:{}
    }],
    defaultStyle:{
      minHeight:'20rem',
      minWidth:'20rem',
    }
  },
  {
    name: 'Dropdown',
    component: Dropdown,
    defaultProps: { 
      menu:{items:[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
      ]}
    },
    defaultStyle:{

    },
    children:<Text>Hover me</Text>
  },
  {
    name:'Anchor',
    component: Anchor,
    defaultProps: {
      affix:false,
      items:[
        {
          key: '1',
          href: '#anchor-demo-basic',
          title: 'Basic demo',
        },
        {
          key: '2',
          href: '#anchor-demo-static',
          title: 'Static demo',
        }]
    },
    defaultStyle:{
      objectFit:'contain',
      
    }
  }
]